import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigator from './navigation/AppNavigator';
import {useDispatch} from 'react-redux';
import { addMyProduct } from './redux/slice/ProductSlice';
let items = [
  {
    id: 0,
    image:
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Sneakers for men (navy)',
    brand: 'Puma',
    price: 2500,
    qty: 0,
  },
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Running Shoes (black)',
    brand: 'Nike',
    price: 1800,
    qty: 0,
  },
  {
    id: 2,
    image:
      'https://plus.unsplash.com/premium_photo-1661780784016-84df03d7d8a8?q=80&w=3306&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Casual Sneakers (gray)',
    brand: 'Adidas',
    price: 2200,
    qty: 0,
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'High-Top Sneakers (white)',
    brand: 'Converse',
    price: 2000,
    qty: 0,
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Sporty Sneakers (red)',
    brand: 'Reebok',
    price: 2600,
    qty: 0,
  },
];

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    items.map(res => {
      dispatch(addMyProduct(res));
    });
  }, []);
  return <AppNavigator />;
};

export default Main;

const styles = StyleSheet.create({});
