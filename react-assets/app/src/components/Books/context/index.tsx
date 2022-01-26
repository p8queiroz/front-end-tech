import React from 'react';

type BooksProviderProps = {
  id: number;
  author: string;
  title: string;
  price: number;
};

type ContextType = {
    id: number;
    author: string;
    title: string;
    price: number;
};

const BooksContext = React.createContext<ContextType>({} as ContextType);

export const useBooks = (): ContextType =>
  React.useContext(BooksContext) as ContextType;

/*
The provider works as a container of other components. But actually, not just a regular container, but a special 
one. The one with super power! This super power involves providing any content defined in the provider to any child
in any level by using a hook.
*/

const BooksProvider: React.FC<BooksProviderProps> = ({
  children, //default prop of react for rendering any component as child.
  ...props
}) => {
    
  //destructing the props.
  const { id, author, title, price } = props;

  //set initial values for the object.
  const [objValue, setObjectValue] = React.useState({
    id, author, title, price
  });

  //in case any property changes.
  React.useEffect(() => {
    if (id && author && title && price) {
      setObjectValue({
        id, author, title, price
      });
    }
  }, [id, author, title, price]);

  return (
    <BooksContext.Provider value={objValue}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
