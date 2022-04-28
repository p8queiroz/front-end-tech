import React, { useReducer } from 'react';
//import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {},
//   })
// );

// const componentA = ({ dispatch: any }) => {
//   return <div onClick={() => dispatch('INSC')}> componentA </div>;
// };

// const componentB = ({ dispatch }) => {
//   return <div onClick={() => dispatch('DESC')}> componentB </div>;
// };

// const componentC = ({ dispatch }) => {
//   return <div onClick={() => console.log('component C clicked')}> componentC </div>;
// };

//MAIS IMPORTANT https://jsfiddle.net/j0y7uaqL/
//adicionar esse css tricks: http://jsfiddle.net/13q8gfo7/

// const reducer = (state: { data: number }, action: { type: any }) => {
//   debugger;
//   switch (action.type) {
//     case 'INSC':
//       return { ...state, data: ++state.data };
//     case 'DESC':
//       return { ...state, data: --state.data };
//     default:
//       return state;
//   }
// };

// const initState = {
//   data: 0,
// };

const Playground = () => {
  // const classes = useStyles();
  // const [state, dispatch] = useReducer(reducer, initState);

  const CONDITIONAL_TEXT_FIELD = 'CONDITIONAL_TEXT_FIELD';
  const CONTROL_TYPE_COMPONENT = 'CONTROL_TYPE_COMPONENT';

  const LABEL = {
    label: 'Label',
    type: CONDITIONAL_TEXT_FIELD,
    name: 'label',
  };

  const INITIAL_VALUE = {
    label: 'Initial Value',
    type: CONDITIONAL_TEXT_FIELD,
    name: 'defaultValue',
  };

  const SET_VALUE = {
    label: 'Set Value',
    type: CONDITIONAL_TEXT_FIELD,
    name: 'setValue',
  };

  const CONTROL_TYPE = {
    label: 'Control Type',
    type: CONTROL_TYPE_COMPONENT,
    name: 'teste',
  };

  const CONTROL_TYPE_ELEMENT = {
    label: 'Data',
    properties: [CONTROL_TYPE],
  };

  const PROPERTIES = {
    ssTextBox: [
      {
        label: 'Data',
        properties: [LABEL, SET_VALUE],
      },
      {
        label: 'Lookup',
        properties: [LABEL, INITIAL_VALUE],
      },
      {
        label: 'Behavior',
        properties: [INITIAL_VALUE, SET_VALUE],
      },
      {
        label: 'On Change',
        properties: [SET_VALUE],
      },
    ],
    ssSingleTab: [
      {
        label: 'Appearance',
        properties: [LABEL, INITIAL_VALUE, SET_VALUE],
      },
      {
        label: 'Behavior',
        properties: [LABEL, SET_VALUE],
      },
    ],
  };

  const NEWPROPERTIES = {};
  Object.keys(PROPERTIES).forEach((key) => {
    NEWPROPERTIES[key] = PROPERTIES[key].map((el) =>
      el.label !== 'Data' ? el : CONTROL_TYPE_ELEMENT
    );
  });

  const isEqual = JSON.stringify(PROPERTIES) === JSON.stringify(NEWPROPERTIES);

  const obj = {
    formBox: {
      teste: 'teste11',
      controlId: 'formBox',
      parent: 'root',
      workFlowKey: 'lorem ',
      formStyle: 'InitForm',
      childrenNodes: [
        'a1b1-74d4-201237112219486-4c01-8584',
        'e841-b56b-201232794433649-d07d-49f0',
        'a2d4-73ac-2012620143048161-dee8-74c0',
      ],
    },
    'a1b1-74d4-201237112219486-4c01-8584': {
      teste: 'ssSubForm',
      controlId: 'a1b1-74d4-201237112219486-4c01-8584',
      parent: 'formBox',
      formName: 'loremipsin',
      defaultLabel: 'Select To Change',
      childrenNodes: ['formBox_loremipsin_807707'],
    },
    'e841-b56b-201232794433649-d07d-49f0': {
      teste: 'ssSubForm',
      controlId: 'e841-b56b-201232794433649-d07d-49f0',
      parent: 'formBox',
      formName: 'loremipsind',
      defaultLabel: 'Select To Change',
      childrenNodes: ['formBox_loremipsind_680732'],
    },
    'a2d4-73ac-2012620143048161-dee8-74c0': {
      teste: 'ssSubForm',
      controlId: 'a2d4-73ac-2012620143048161-dee8-74c0',
      parent: 'formBox',
      formName: 'loremipsin',
      defaultLabel: 'Select To Change',
      childrenNodes: ['formBox_loremipsin_872696'],
    },
  };

  const newElement = {
    '2345-2345-2345234-4c01-8584': {
      teste: 'asdfasdf',
      controlId: 'a1b1-74d4-201237112219486-4c01-8584',
      parent: 'textContent',
      formName: 'loremipsin',
      defaultLabel: 'Select To Change',
      childrenNodes: ['textContent_loremipsin_807707'],
    },
  };

  const newObject1 = {
    ...obj,
    '2345-2345-2345234-4c01-8584': { ...newElement['2345-2345-2345234-4c01-8584'] },
  };

  const formModel = {};

  for (var key in obj) {
    formModel[key] = obj[key];
    if (key === 'a1b1-74d4-201237112219486-4c01-8584') {
      formModel['2345-2345-2345234-4c01-8584'] = {
        teste: 'asdfasdf',
        controlId: '2345-2345-2345234-4c01-8584',
        parent: 'textContent',
        formName: 'loremipsin added new controller',
        defaultLabel: 'Select To Change',
        childrenNodes: ['textContent_loremipsin_807707'],
      };
    }
  }

  const teste = [
    {
      controlId: '6e9656a6-4ba8-4126-a250-4fd76d92bd0d',
      parent: '2458-b2bf-2011119121913760-66bf-68bd',
      controlType: 'ssNumericTextBox',
      label: '',
      previousControlId: '6478-2a84-2012213173447850-bdd6-f394',
      optionsSelect: [
        {
          icon: {
            type: {
              type: {},
              compare: null,
              displayName: 'TextBoldIcon',
              muiName: 'SvgIcon',
            },
            key: null,
            ref: null,
            props: {
              style: {
                fontSize: 15,
              },
            },
            _owner: null,
            _store: {},
          },
          text: 'Numeric Text Box',
          value: 'ssNumericTextBox',
        },
      ],
    },
    {
      controlId: '78a0d283-c2ca-4819-b51c-7612009665a6',
      parent: '2458-b2bf-2011119121913760-66bf-68bd',
      controlType: 'ssNumericTextBox',
      label: '',
      previousControlId: '5364-3ab4-2012526121141471-b684-04ce',
      optionsSelect: [
        {
          icon: {
            type: {
              type: {},
              compare: null,
              displayName: 'TextBoldIcon',
              muiName: 'SvgIcon',
            },
            key: null,
            ref: null,
            props: {
              style: {
                fontSize: 15,
              },
            },
            _owner: null,
            _store: {},
          },
          text: 'Numeric Text Box',
          value: 'ssNumericTextBox',
        },
      ],
    },
  ];

  const novoTeste = teste.reduce((acc, current) => {
    const { controlId } = current;
    acc.push(controlId);
    return acc;
  }, []);

  // const index = objectToArray.findIndex(
  //   (element) => element && element[0] === 'a1b1-74d4-201237112219486-4c01-8584'
  // );

  // const newObjectToArray = objectToArray.splice(index, 0, 'newElement');
  // debugger;

  // const arrayToObjects = Object.fromEntries(newObjectToArray);

  return (
    <div style={{ margin: '10%' }}>
      <div style={{ float: 'left' }}>
        <pre>{JSON.stringify(novoTeste, null, 4)}</pre>
      </div>
      {/* <div style={{ float: 'left' }}>
        <pre>{JSON.stringify(obj, null, 4)}</pre>
      </div>
      <div style={{ float: 'left' }}>
        <pre>{JSON.stringify(newObject1, null, 4)}</pre>
      </div>

      <div style={{ float: 'left' }}>
        <pre>{JSON.stringify(formModel, null, 4)}</pre>
      </div>
      {/* <div>are they equal? {isEqual ? `Yes` : `Nah`}</div> */}
      {/* <div>
        <pre>{Object.keys(PROPERTIES).join(',')}</pre>
      </div>
      <div style={{ float: 'left' }}>
        <pre>{JSON.stringify(PROPERTIES, null, 4)}</pre>
      </div>
      <div style={{ float: 'right' }}>
        <pre>{JSON.stringify(NEWPROPERTIES, null, 4)}</pre>
      </div>{' '}
       */}
    </div>
  );
};

export default Playground;
