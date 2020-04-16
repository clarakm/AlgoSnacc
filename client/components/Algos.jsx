import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const Algos = () => {
  const list = [
    'Two Sum',
    'Add Two Numbers',
    'Longest Substring Without Repeating Characters',
    'Median of Two Sorted Arrays',
    'Longest Palindrom Substring',
    'ZigZag Conversion',
    'Reverse Integer',
    'String to Integer',
    'Palindrome Number',
    'Regular Expressin Matching',
    'Container With Most Water',
    'Integer to Roman',
    'Roman to Integer',
    'Longest Common Prefix',
    'Valid Parentheses',
    'Merge Two Sorted Lists',
    'Generate Parentheses',
    'Remove Duplicates',
    'Remove Elements',
    'Divide Two Integers',
    'Combination Sum',
    'First Missing Positive',
    'Permutations',
    'Rock Paper Scissors',
    'Matrix Transpose',
    'Matrix Rotate',
    'SubsetSum',
    'Double Linked List',
    'Reverse Linked List',
    'Merge Sort',
    'Selection Sort',
    'Valid Binary Search Tree',
    'Throttle',
  ];
  return (
    <ScrollView>
      {list.map((algo, i) => (
        <ListItem
          key={i}
          title={algo}
          rightIcon={{
            type: 'font-awesome',
            name: 'chevron-right',
            color: 'grey',
            size: 20,
          }}
          bottomDivider
        />
      ))}
    </ScrollView>
  );
};

export default Algos;
