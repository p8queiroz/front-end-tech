import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WelcomeWidget from '.';

import { Grid } from 'components/MaterialUIBase';

afterEach(cleanup);

describe('WelcomeWidget component', () => {
  test('Should render loading compoment when isLoading= true', async () => {
    const propsPassedToComponent = {
      isLoading: true,
    };
    const { getByTestId, unmount } = render(
      <CustomMaterialUIProvider>
        <Grid container>
          <Grid item xs={12}>
            <WelcomeWidget {...propsPassedToComponent} />
          </Grid>
        </Grid>
      </CustomMaterialUIProvider>
    );
    // wait for the lazy loading and
    // wait for the useQueries to update component
    const welcomeWidget = getByTestId('welcome-loader-keleton');
    expect(welcomeWidget).toBeDefined();
    unmount();
  });
  test('Should render WelcomeWidget compoment on props', async () => {
    const propsPassedToComponent = {
      name: 'welcome',
      contentWidgetId: 1,
      content:
        '<h6>Wellcome back #firstName#</h6> <p>You have completed #completedTasks# of  your goals \nKeep improving your sustainability!</p>',
      backgroundImageSrc:
        'https://prorotypeimages.blob.core.windows.net/sustaintagicons/ReduceWaste-card.svg',
      backgroundColor: '#2abdc3',
      color: '#fff',
    };
    const { getByTestId, unmount } = render(
      <CustomMaterialUIProvider>
        <Grid container>
          <Grid item xs={12}>
            <WelcomeWidget {...propsPassedToComponent} />
          </Grid>
        </Grid>
      </CustomMaterialUIProvider>
    );
    // wait for the lazy loading and
    // wait for the useQueries to update component
    const welcomeWidget = getByTestId('welcome-widget-card');
    expect(welcomeWidget).toBeDefined();
    const innerHtml = getByTestId('inner-html');
    expect(innerHtml).toBeDefined();
    unmount();
  });

  test('Uses props passed to style component', async () => {
    const propsPassedToComponent = {
      name: 'welcome',
      contentWidgetId: 1,
      content:
        '<h6>Wellcome back #firstName#</h6><p>You have completed #completedTasks# of  your goals \nKeep improving your sustainability!</p>',
      backgroundImageSrc:
        'https://prorotypeimages.blob.core.windows.net/sustaintagicons/ReduceWaste-card.svg',
      backgroundColor: '#2abdc3',
      color: '#fff',
    };
    const { getByText, getByTestId, unmount } = render(
      <CustomMaterialUIProvider>
        <Grid container>
          <Grid item xs={12}>
            <WelcomeWidget {...propsPassedToComponent} />
          </Grid>
        </Grid>
      </CustomMaterialUIProvider>
    );
    // wait for the lazy loading and
    // wait for the useQueries to update component
    const text = await getByText('Wellcome back #firstName#', { exact: false });
    expect(text).toBeDefined();

    const innerHtml = getByTestId('inner-html');
    const welcomeWidgetCard = getByTestId('welcome-widget-card');

    expect(welcomeWidgetCard).toHaveClass('MuiCard-root');

    // assert html in div element
    expect(innerHtml).toContainHTML(propsPassedToComponent.content);

    // assert background image
    expect(welcomeWidgetCard).toHaveStyle(
      `background-image: url(${propsPassedToComponent.backgroundImageSrc})`
    );
    // assert background possition
    expect(welcomeWidgetCard).toHaveStyle(`background-position: right center`);

    // assert text color
    expect(innerHtml).toHaveStyle(`color: rgb(255, 255, 255)`);

    expect(welcomeWidgetCard).toContainElement(innerHtml);

    unmount();
  });
});
