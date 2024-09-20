import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Book from '../components/Book';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { getBooks } from '../store/booksAction';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { books } = useSelector((state: RootState) => state.books)
  const { value } = useSelector((state: RootState) => state.counter)

  console.log(books);
  

  useEffect(() => {
    dispatch(getBooks())
  },[])

  type BookItem = {
    name_of_book: string,
    author: string,
    cover: string,
    price: string
  }


  const renderItem: ListRenderItem<BookItem> = ({ item }) => (
    <Book
      author={item.author}
      coverURL={item.cover}
      nameOfBook={item.name_of_book}
      price={item.price}
      categoryColor='#764abc'
    />
  );


  return (
    <View style={styles.cont}>
      <Text>{value}</Text>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
});
