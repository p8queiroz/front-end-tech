import { IonItemDivider, IonItemGroup, IonLabel, IonList, IonListHeader, IonAlert, AlertButton, IonContent, IonReorderGroup, IonItem, IonReorder, IonIcon } from '@ionic/react';
import React, { useState, useCallback } from 'react';
import { connect } from '../../data/connect';
import { addFavorite, removeFavorite } from '../../data/questions/questions.actions';
import { pizza } from 'ionicons/icons';
import { ItemReorderEventDetail } from '@ionic/core';
import './Draggable.scss';
import { createGesture, CreateAnimation, Gesture, GestureDetail } from '@ionic/react';

interface OwnProps {
}

interface StateProps {

}


interface TestListProps extends OwnProps, StateProps { };

const MAX_TRANSLATE = 400;

class Draggable extends React.Component<{}, any> {
    private animation: React.RefObject<CreateAnimation> = React.createRef();
    private gesture?: Gesture;
    private started: boolean = false;
    private initialStep: number = 0;

    constructor(props: any) {
        super(props);

        this.state = {
            progressStart: undefined,
            progressStep: undefined,
            progressEnd: undefined,
            onFinish: undefined
        };
    }

    componentDidMount() {
        const square = Array.from(this.animation.current!.nodes.values())[0];

        this.gesture = createGesture({
            el: square,
            gestureName: 'square-drag',
            threshold: 0,
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev)
        });

        this.gesture.enable(true);
    }

    private onMove(ev: GestureDetail) {
        if (!this.started) {
            this.setState({
                ...this.state,
                progressStart: { forceLinearEasing: true }
            });
            this.started = true;
        }

        this.setState({
            ...this.state,
            progressStep: { step: this.getStep(ev) }
        });
    }

    private onEnd(ev: GestureDetail) {
        if (!this.started) { return; }

        this.gesture!.enable(false);

        const step = this.getStep(ev);
        const shouldComplete = step > 0.5;

        this.setState({
            ...this.state,
            progressEnd: { playTo: (shouldComplete) ? 1 : 0, step },
            onFinish: {
                callback: () => {
                    this.gesture!.enable(true);
                    this.setState({
                        progressStart: undefined,
                        progressStep: undefined,
                        progressEnd: undefined
                    })
                }, opts: { oneTimeCallback: true }
            }
        });

        this.initialStep = (shouldComplete) ? MAX_TRANSLATE : 0;
        this.started = false;
    }

    private getStep(ev: GestureDetail) {
        const delta = this.initialStep + ev.deltaX;
        return this.clamp(0, delta / MAX_TRANSLATE, 1);
    }

    private clamp(min: number, n: number, max: number) {
        return Math.max(min, Math.min(n, max));
    }

    render() {
        return (
            <IonItem>
                <div className="track">
                    <CreateAnimation
                        ref={this.animation}
                        duration={1000}
                        progressStart={this.state.progressStart}
                        progressStep={this.state.progressStep}
                        progressEnd={this.state.progressEnd}
                        onFinish={this.state.onFinish}
                        fromTo={{
                            property: 'transform',
                            fromValue: 'translateX(0)',
                            toValue: `translateX(${MAX_TRANSLATE}px)`
                        }}>
                        <div className="square"></div>
                    </CreateAnimation>
                </div>
            </IonItem>
        );
    }
}

export default Draggable
