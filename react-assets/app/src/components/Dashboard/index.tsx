import React from 'react';
import LayoutContainer from './components/LayoutContainer';
import TrainingWidget from './components/Trainning';
import ConfigWidget from './components/ConfigWidget';
import WelcomeWidget from './components/WelcomeWidget';
import PomodoroWidget from './components/PomodoroWidget';

const Dashboard: React.FC = () => {
  return (
    <LayoutContainer
      welcomeWidget={<WelcomeWidget maxHeight={300} />}
      trainingWidget={<TrainingWidget maxHeight={300} />}
      configWidget={<ConfigWidget maxHeight={300} />}
      pomodoroWidget={<PomodoroWidget maxHeight={300} />}
    />
  );
};

export default Dashboard;
