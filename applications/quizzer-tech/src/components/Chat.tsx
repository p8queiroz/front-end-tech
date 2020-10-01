import { IonItemDivider, IonItemGroup, IonLabel, IonList, IonListHeader, IonAlert, AlertButton, IonItem, IonContent } from '@ionic/react';
import React, { useState, useCallback } from 'react';
import { Question } from '../models/Questions';
import QuestionListItem from './TestListItem';
import { connect } from '../data/connect';
import { addFavorite, removeFavorite } from '../data/questions/questions.actions';

interface OwnProps {
  questions?: Question[];
  listType?: 'all' | 'favorites';
  hide?: boolean;
}

interface StateProps {
  favoriteSessions?: number[];
}

interface DispatchProps {
  addFavorite?: typeof addFavorite;
  removeFavorite?: typeof removeFavorite;
}

interface TestListProps extends OwnProps, StateProps, DispatchProps { };

const Chat: React.FC<TestListProps> = ({ addFavorite, removeFavorite, favoriteSessions, hide, questions, listType }) => {

  const [showAlert, setShowAlert] = useState(false);
  const [alertHeader, setAlertHeader] = useState('');
  const [alertButtons, setAlertButtons] = useState<(AlertButton | string)[]>([]);

  const handleShowAlert = useCallback((header: string, buttons: AlertButton[]) => {
    setAlertHeader(header);
    setAlertButtons(buttons);
    setShowAlert(true);
  }, []);



  return (
    <>
      <IonItem>
        <div className="container clearfix">
          <div className="chat">
            <div className="chat-header clearfix">
              <img src="assets/img/robot.png" alt="avatar" />

              <div className="chat-about">
                <div className="chat-with">Chat with Quizy</div>
                <div className="chat-num-messages">already 1 902 messages</div>
              </div>
              <i className="fa fa-star"></i>
            </div>

            <div className="chat-history">
              <ul>
                <li className="clearfix">
                  <div className="message-data align-right">
                    <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>

                  </div>
                  <div className="message other-message float-right">
                    Hi Quizy, how are you? How is the project coming along?
            </div>
                </li>

                <li>
                  <div className="message-data">
                    <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                    <span className="message-data-time">10:12 AM, Today</span>
                  </div>
                  <div className="message my-message">
                    Are we meeting today? Project has been already finished and I have results to show you.
            </div>
                </li>

                <li className="clearfix">
                  <div className="message-data align-right">
                    <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>

                  </div>
                  <div className="message other-message float-right">
                    Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
            </div>
                </li>

                <li>
                  <div className="message-data">
                    <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                    <span className="message-data-time">10:20 AM, Today</span>
                  </div>
                  <div className="message my-message">
                    Actually everything was fine. I'm very excited to show this to our team.
            </div>
                </li>

                <li>
                  <div className="message-data">
                    <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                    <span className="message-data-time">10:31 AM, Today</span>
                  </div>
                  <i className="fa fa-circle online"></i>
                  <i className="fa fa-circle online" style={{ color: "#AED2A6" }}></i>
                  <i className="fa fa-circle online" style={{ color: "#DAE9DA" }}></i>
                </li>

              </ul>

            </div>

            <div className="chat-message clearfix">
              <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows={3}></textarea>
              <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                <i className="fa fa-file-image-o"></i>
              <button>Send</button>
            </div>

          </div>

        </div>
      </IonItem>
    </>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    favoriteSessions: state.data.favorites
  }),
  mapDispatchToProps: ({
    addFavorite,
    removeFavorite
  }),
  component: Chat
});