import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';
import InterPolationProvider from 'contexts/InterpolationTokenProvider';
import CarouselsResolver from 'graphql/carousels/resolver';
import ActionCategoryResolver from 'graphql/actionCategory/resolver';
import TokensResolver from 'graphql/tokens/resolver';
import Dashboard from '.';
import Profile from 'containers/Profile';
import { UserResolver } from 'graphql/users';

afterEach(cleanup);

// mock graphql queries
const mocks = [
  {
    request: {
      query: UserResolver.queries.GET_USER_BY_OID,
      variables: { oId: 'ce861df4-08c4-4b26-85a7-2693b59698b9' },
    },
    result: {
      data: {
        userByID: {
          __typename: 'User',
          userId: '37',
          userOId: 'ce861df4-08c4-4b26-85a7-2693b59698b9',
          config: [
            {
              __typename: 'UserConfig',
              value: true,
              configType: {
                __typename: 'ConfigType',
                configTypeId: '1',
                name: 'userSignUp',
              },
            },
            {
              __typename: 'UserConfig',
              value: true,
              configType: {
                __typename: 'ConfigType',
                configTypeId: '2',
                name: 'userOnBoarding',
              },
            },
          ],
          customers: [
            {
              __typename: 'Customer',
              customerId: '107',
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: ActionCategoryResolver.queries.GET_ACTION_CATEGORY_GET_ALL,
    },
    result: {
      data: {
        actionCategoryGetAll: [
          {
            __typename: 'ActionCategory',
            actionCategoryId: '1',
            actionCategoryName: 'Waste',
            cardHeaderSrc: 'wastemanagementCardImage.jpg',
            iconSrc:
              'https://prorotypeimages.blob.core.windows.net/sustaintagicons/IconOnboard_waste.jpg',
            headerSrc: '',
            bannerSrc: '',
            actionCategoryCardDescription:
              'These are all actions related to waste and waste management within the company',
            actions: [
              {
                __typename: 'Action',
                actionId: '12',
                actionTitle: 'Use recycled material in packaging',
              },
              {
                __typename: 'Action',
                actionId: '32',
                actionTitle: 'Reconfigure office layout for temp. preferences',
              },
            ],
            rgbColor: '#4db6ac',
            actionCategoryType: {
              __typename: 'ActionCategoryType',
              actionCategoryTypeId: '1',
              actionCategoryType: 'Theme',
            },
          },
          {
            __typename: 'ActionCategory',
            actionCategoryId: '4',
            actionCategoryName: 'Water Use',
            cardHeaderSrc: 'waterManagementCardImage.jpg',
            iconSrc:
              'https://prorotypeimages.blob.core.windows.net/sustaintagicons/IconOnboard_water.jpg\r\n',
            headerSrc: '',
            bannerSrc: '',
            actionCategoryCardDescription: 'Actions around use of water',
            actions: [
              {
                __typename: 'Action',
                actionId: '45',
                actionTitle: 'Change dishwashing behaviors',
              },
              {
                __typename: 'Action',
                actionId: '46',
                actionTitle: 'Install low-flow/flush fixtures',
              },
            ],
            rgbColor: '#ffeb3b',
            actionCategoryType: {
              __typename: 'ActionCategoryType',
              actionCategoryTypeId: '1',
              actionCategoryType: 'Theme',
            },
          },
        ],
      },
    },
  },
  {
    request: {
      query: CarouselsResolver.queries.FIND_ALL_CONTEXTS,
      variables: { body: { contextNames: ['dashboard/all'] } },
    },
    result: {
      data: {
        findAllContexts: [
          {
            __typename: 'Context',
            contextId: '4',
            contextName: 'dashboard/all',
            carouselContext: [
              {
                __typename: 'ContextCarousel',
                rank: 1,
                carousel: null,
                contentWidget: {
                  __typename: 'ContentWidget',
                  interestActionCategories: null,
                  name: 'welcome',
                  contentWidgetId: '1',
                  content:
                    '<h6>Welcome back #firstName#</h6> <p>You have completed #completedTasks# of  your goals \nKeep improving your sustainability!</p>',
                  backgroundImageSrc:
                    'https://prorotypeimages.blob.core.windows.net/sustaintagicons/ReduceWaste-card.svg',
                  backgroundColor: '#2abdc3',
                  color: '#fff',
                },
              },
              {
                __typename: 'ContextCarousel',
                rank: 2,
                carousel: null,
                contentWidget: {
                  __typename: 'ContentWidget',
                  interestActionCategories: [
                    {
                      __typename: 'ActionCategory',
                      actionCategoryId: '5',
                      actionCategoryName: 'Energy',
                    },
                    {
                      __typename: 'ActionCategory',
                      actionCategoryId: '13',
                      actionCategoryName: 'Fuel and Energy Activity',
                    },
                    {
                      __typename: 'ActionCategory',
                      actionCategoryId: '20',
                      actionCategoryName: 'Processing of Sold Products',
                    },
                    {
                      __typename: 'ActionCategory',
                      actionCategoryId: '24',
                      actionCategoryName: 'Culture',
                    },
                  ],
                  name: 'interest-selector',
                  contentWidgetId: '2',
                  content: '<h6>Interests</h6>',
                  backgroundImageSrc: null,
                  backgroundColor: '#fff',
                  color: 'rgba(0, 0, 0, 0.87)',
                },
              },
              {
                __typename: 'ContextCarousel',
                rank: 3,
                carousel: {
                  __typename: 'Carousel',
                  name: 'actionCategory-carousel',
                  carouselId: '8',
                  title: 'Action Categories',
                  imageCardSrc: '',
                  imageCardRank: 1,
                  actionCategories: [
                    {
                      __typename: 'ActionCategory',
                      actionCategoryId: '1',
                      actionCategoryName: 'Waste',
                      headerSrc:
                        'https://prorotypeimages.blob.core.windows.net/sustaintagicons/ReduceWaste-card.svg',
                      bannerSrc:
                        'https://prorotypeimages.blob.core.windows.net/sustaintagicons/Reduce Waste - banner.svg',
                    },
                    {
                      __typename: 'ActionCategory',
                      actionCategoryId: '4',
                      actionCategoryName: 'Water Use',
                      headerSrc:
                        'https://prorotypeimages.blob.core.windows.net/sustaintagicons/Reducewaterconsumption-card.svg',
                      bannerSrc:
                        'https://prorotypeimages.blob.core.windows.net/sustaintagicons/Reduce water consumption - banner.svg',
                    },
                    {
                      __typename: 'ActionCategory',
                      actionCategoryId: '5',
                      actionCategoryName: 'Energy',
                      headerSrc:
                        'https://prorotypeimages.blob.core.windows.net/sustaintagicons/EnergyConsumption-card.svg',
                      bannerSrc:
                        'https://prorotypeimages.blob.core.windows.net/sustaintagicons/Energy Consumption - banner.svg',
                    },
                  ],
                  actionCollection: [],
                  actionCollectionCount: 0,
                },
                contentWidget: null,
              },
            ],
          },
        ],
      },
    },
  },
  {
    request: {
      query: TokensResolver.queries.FIND_ALL_WIDGET_TOKENS,
    },
    result: {
      data: {
        findAllWidgetTokens: [
          {
            widgetTokenId: '1',
            internalId: '1A28C4BA-F964-4390-B8AB-F45BF6FF92CF',
            name: '{firstName}',
            description: 'User First Name',
            value: 'German',
          },
          {
            widgetTokenId: '2',
            internalId: 'BF3AB26D-F3AC-47B1-8F22-17AA2A04D8E3',
            name: '{completedTasks}',
            description: 'User completed percentage of tasks',
            value: '0',
          },
          {
            widgetTokenId: '3',
            internalId: 'AA1E04D7-35FF-43EC-A3C7-F91931C3C515',
            name: '{fullName}',
            description: 'User Full Name',
            value: 'German Urrustarazu',
          },
        ],
      },
    },
  },
];

describe('Dahsboard component', () => {
  test('should render dashboard compoment', async () => {
    const { getByTestId, unmount } = render(
      <CustomMaterialUIProvider>
        <MockedProvider mocks={mocks} addTypename={true}>
          <Profile>
            <InterPolationProvider>
              <Dashboard />
            </InterPolationProvider>
          </Profile>
        </MockedProvider>
      </CustomMaterialUIProvider>
    );
    // wait for the lazy loading and
    // wait for the useQueries to update component
    const actioncategories = await waitFor(() => getByTestId('carousel-action-categories'));
    expect(actioncategories).toBeDefined();
    const dashboardComponent = getByTestId('dashboard-component');
    expect(dashboardComponent).toBeDefined();
    unmount();
  });

  test('should have a welcome card compoent', async () => {
    const { getByTestId, unmount } = render(
      <CustomMaterialUIProvider>
        <MockedProvider mocks={mocks} addTypename={true}>
          <Profile>
            <InterPolationProvider>
              <Dashboard />
            </InterPolationProvider>
          </Profile>
        </MockedProvider>
      </CustomMaterialUIProvider>
    );
    // wait for the lazy loading and
    // wait for the useQueries to update component
    const welcomeCardComponent = await waitFor(() => getByTestId('welcome-widget-card'));
    expect(welcomeCardComponent).toBeDefined();
    unmount();
  });

  test('should have a interest selector card compoent', async () => {
    const { getByTestId, unmount } = render(
      <CustomMaterialUIProvider>
        <MockedProvider mocks={mocks} addTypename={true}>
          <Profile>
            <InterPolationProvider>
              <Dashboard />
            </InterPolationProvider>
          </Profile>
        </MockedProvider>
      </CustomMaterialUIProvider>
    );
    // wait for the lazy loading and
    // wait for the useQueries to update component
    const interestCardComponent = await waitFor(() => getByTestId('intereset-widget-card'));
    expect(interestCardComponent).toBeDefined();
    unmount();
  });

  test('should have a company info card compoent', async () => {
    const { getByTestId, unmount } = render(
      <CustomMaterialUIProvider>
        <MockedProvider mocks={mocks} addTypename={true}>
          <Profile>
            <InterPolationProvider>
              <Dashboard />
            </InterPolationProvider>
          </Profile>
        </MockedProvider>
      </CustomMaterialUIProvider>
    );
    // wait for the lazy loading and
    // wait for the useQueries to update component
    const companyInfoCardComponent = await waitFor(() => getByTestId('company-info-widget'));
    expect(companyInfoCardComponent).toBeDefined();
    unmount();
  });
});
