import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ChallengeIntro from '../components/ChallengeIntro.jsx';
import CodeEditor from '../components/CodeEditor.jsx';
// import { IP } from 'react-native-dotenv';
// import axios from 'axios';

const ChallengeScreen = ({ navigation }) => {
  // const [challenge, setChallenge] = useState('');

  // useEffect(() => {
  //   const getChallenge = async () => {
  //     try {
  //       console.log('in get challenge');
  //       const algo = await axios(IP + `:3000/api`);
  //       // console.log('algo', algo.data.challenge);
  //       const parse = algo.data.challenge;
  //       // const regexp = new RegExp('#([^\\s]*)', 'g');
  //       // parse = parse.replace(regexp);
  //       // console.log('regex', parse);
  //       setChallenge(parse);
  //       console.log('parse', parse);
  //     } catch (err) {
  //       console.log('error in getting challenge');
  //     }
  //   };
  //   getChallenge();
  // }, [challenge]);

  return (
    <>
      {/* <ScrollView style={styles.container}>
        <Text style={styles.problem}>{challenge}</Text>
      </ScrollView> */}
      <ScrollView style={styles.container}>
        <ChallengeIntro style={styles.intro} />
      </ScrollView>
      <CodeEditor style={styles.editor} />
    </>
  );
};

export default ChallengeScreen;

const styles = StyleSheet.create({
  container: {
    height: 0,
  },
  editor: {
    flex: 1,
  },
});
