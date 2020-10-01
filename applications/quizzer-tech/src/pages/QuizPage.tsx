import React, { useState, useRef } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonSlides, IonSlide, IonIcon, useIonViewWillEnter, IonNote, IonRow, IonGrid, IonCol } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { setMenuEnabled } from '../data/questions/questions.actions';
import { setHasSeenTutorial } from '../data/user/user.actions';
import './QuizPage.scss';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import { IonCard, IonCardHeader, IonItem, IonLabel, IonAvatar, IonCardContent, IonList } from '@ionic/react';



interface OwnProps extends RouteComponentProps { };

interface DispatchProps {
  setHasSeenTutorial: typeof setHasSeenTutorial;
  setMenuEnabled: typeof setMenuEnabled;
}

interface QuizPageProps extends OwnProps, DispatchProps { };

const QuizPage: React.FC<QuizPageProps> = ({ history, setHasSeenTutorial, setMenuEnabled }) => {

  const [showSkip, setShowSkip] = useState(true);
  const slideRef = useRef<HTMLIonSlidesElement>(null);

  useIonViewWillEnter(() => {
    setMenuEnabled(false);
  });

  const startApp = async () => {
    await setHasSeenTutorial(true);
    await setMenuEnabled(true);
    history.push('/tabs/questions', { direction: 'none' });
  };

  const handleSlideChangeStart = () => {
    slideRef.current!.isEnd().then(isEnd => setShowSkip(!isEnd));
  };

  return (
    <IonPage id="tutorial-page">
      <IonHeader no-border>
        <IonToolbar>
          <IonButtons slot="end">
            {showSkip && <IonButton color='primary' onClick={startApp}>Sair</IonButton>}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSlides ref={slideRef} onIonSlideWillChange={handleSlideChangeStart} pager={false}>
          <IonSlide>
            <img src="assets/img/cartoon/cartoon02.jpg" alt="" className="slide-image" />
            <h3 className="slide-title">
              Assinale a alternativa que melhor expresse o efeito de humor contido na tirinha:
            </h3>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>A</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          O discurso feminista de Susanita é responsável pelo efeito de humor, já que o tema é tratado de forma irônica, denotando certo machismo por parte do autor da tirinha.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>B</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          A linguagem verbal não contribui para o melhor entendimento da tirinha, pois todo efeito de humor está contido na linguagem não verbal por meio da expressão exibida por Mafalda no último quadrinho.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>C</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          Mafalda opõe-se ao discurso da amiga Susanita e, por meio de suas feições em todos os quadrinhos, percebe-se nitidamente seu descontentamento.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>D</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          Susanita apresenta um discurso de acordo com as teorias feministas que pregam a libertação das práticas tradicionalmente atribuídas à mulher. Contudo, no último quadrinho, a personagem defende o uso de uma tecnologia que apenas reforça os padrões tradicionais.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

          </IonSlide>

          <IonSlide>
            <video controls>
              <source src="assets/video/sample.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              </video>



            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>A</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          O discurso feminista de Susanita é responsável pelo efeito de humor, já que o tema é tratado de forma irônica, denotando certo machismo por parte do autor da tirinha.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>B</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          A linguagem verbal não contribui para o melhor entendimento da tirinha, pois todo efeito de humor está contido na linguagem não verbal por meio da expressão exibida por Mafalda no último quadrinho.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>C</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          Mafalda opõe-se ao discurso da amiga Susanita e, por meio de suas feições em todos os quadrinhos, percebe-se nitidamente seu descontentamento.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>D</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          Susanita apresenta um discurso de acordo com as teorias feministas que pregam a libertação das práticas tradicionalmente atribuídas à mulher. Contudo, no último quadrinho, a personagem defende o uso de uma tecnologia que apenas reforça os padrões tradicionais.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>


          </IonSlide>


          <IonSlide>
            <video controls>
              <source src="assets/video/sample1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              </video>



            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>A</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          O discurso feminista de Susanita é responsável pelo efeito de humor, já que o tema é tratado de forma irônica, denotando certo machismo por parte do autor da tirinha.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>B</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          A linguagem verbal não contribui para o melhor entendimento da tirinha, pois todo efeito de humor está contido na linguagem não verbal por meio da expressão exibida por Mafalda no último quadrinho.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>C</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          Mafalda opõe-se ao discurso da amiga Susanita e, por meio de suas feições em todos os quadrinhos, percebe-se nitidamente seu descontentamento.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>D</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          Susanita apresenta um discurso de acordo com as teorias feministas que pregam a libertação das práticas tradicionalmente atribuídas à mulher. Contudo, no último quadrinho, a personagem defende o uso de uma tecnologia que apenas reforça os padrões tradicionais.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>


          </IonSlide>

          <IonSlide>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>A</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          O discurso feminista de Susanita é responsável pelo efeito de humor, já que o tema é tratado de forma irônica, denotando certo machismo por parte do autor da tirinha.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>B</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          A linguagem verbal não contribui para o melhor entendimento da tirinha, pois todo efeito de humor está contido na linguagem não verbal por meio da expressão exibida por Mafalda no último quadrinho.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>C</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          Mafalda opõe-se ao discurso da amiga Susanita e, por meio de suas feições em todos os quadrinhos, percebe-se nitidamente seu descontentamento.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>

            <IonCard className="speaker-card" button>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonCardHeader>
                      <IonItem lines="none" className="speaker-item">
                        <IonLabel>
                          <h2>D</h2>
                        </IonLabel>
                      </IonItem>
                    </IonCardHeader>
                  </IonCol>
                  <IonCol size="10">
                    <IonCardContent>
                      <IonNote>
                        <span>
                          Susanita apresenta um discurso de acordo com as teorias feministas que pregam a libertação das práticas tradicionalmente atribuídas à mulher. Contudo, no último quadrinho, a personagem defende o uso de uma tecnologia que apenas reforça os padrões tradicionais.
                        </span>
                      </IonNote>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>


          </IonSlide>

          <IonSlide>
            <img src="assets/img/cartoon/cartoon02.jpg" alt="" className="slide-image" />
            <h2 className="slide-title">Should I need to creat an account?</h2>
            <p>
              <b>No!</b> You can have access to all questions with no need to log in. For some features like fav a question you need to be logged in tho    </p>
          </IonSlide>

          <IonSlide>
            <img src="assets/img/cartoon/cartoon02.jpg" alt="" className="slide-image" />
            <h2 className="slide-title">Ready to Play?</h2>
            <IonButton fill="clear" onClick={startApp}>
              Continue
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: ({
    setHasSeenTutorial,
    setMenuEnabled
  }),
  component: QuizPage
});