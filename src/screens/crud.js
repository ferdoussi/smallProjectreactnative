import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Image } from 'react-native';

export default function Crud() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = () => {
    if (!title.trim() || !description.trim() || !image.trim()) {
      alert('All fields are required');
      return;
    }
    if (editingItem !== null) {
      const updatedItems = items.map(item => item.id === editingItem.id ? { ...item, title, description, image } : item);
      setItems(updatedItems);
      setEditingItem(null);
    } else {
      setItems([...items, { id: Math.random().toString(), title, description, image }]);
    }
    setTitle('');
    setDescription('');
    setImage('');
  };

  const editItem = (item) => {
    setTitle(item.title);
    setDescription(item.description);
    setImage(item.image);
    setEditingItem(item);
  };

  const deleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD App</Text>
      <TextInput
        placeholder="Enter title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Enter description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Enter image URL"
        style={styles.input}
        value={image}
        onChangeText={setImage}
      />
      <Button title={editingItem ? "Update Item" : "Add Item"} onPress={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => editItem(item)} style={styles.button}>
                <Text style={styles.buttonText1}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.button}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius:10,
    borderColor:'green'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
  },
  buttonText: {
    backgroundColor:'red',
    borderRadius:5,
    color:'white'
  },
  buttonText1:{
    color:'white',
    backgroundColor:'green',
    borderRadius:5,
  }
});
