import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet,SafeAreaView,FlatList,ImageBackground,Image} from 'react-native';
import axios from 'axios';


export default function Rende(){

//mpaa_rating

    const[dataa1,setData]=useState('datas');
    const[sum1,setsum1]=useState('im');

    const[dataa2,setData2]=useState('datas');
    const[sum2,setsum2]=useState('im');


    const[dataa3,setData3]=useState('datas');
    const[sum3,setsum3]=useState('im');

    const[dataa4,setData4]=useState('datas');
    const[sum4,setsum4]=useState('im');

    const[dataa5,setData5]=useState('datas');
    const[sum5,setsum5]=useState('im');

    const[dataa6,setData6]=useState('datas');
    const[sum6,setsum6]=useState('im');

    const[dataa7,setData7]=useState('datas');
    const[sum7,setsum7]=useState('im');
    
        axios({
            method: 'get',
            url: 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?offset=40&order=by-opening-date&api-key=vLWk7t8mfxj9CTiWj6TPHDP2T70IJ9Bp',
        }).then((response)=>{
            setData(response.data.results[0].display_title);
            setsum1(response.data.results[0].summary_short);

            setData2(response.data.results[1].display_title);
            setsum2(response.data.results[1].summary_short);

            setData3(response.data.results[2].display_title);
            setsum3(response.data.results[2].summary_short);

            setData4(response.data.results[3].display_title);
            setsum4(response.data.results[3].summary_short);
            
            setData5(response.data.results[4].display_title);
            setsum5(response.data.results[4].summary_short);

            setData6(response.data.results[5].display_title);
            setsum6(response.data.results[5].summary_short);

            setData7(response.data.results[6].display_title);
            setsum7(response.data.results[6].summary_short);

        });
        
    return(
      <ScrollView>
          <View style={styles.head}>
              <Text style={styles.title}>Movie Summary</Text>
          </View >

        <View style={{padding:20}}>

          <View>
          <Text style={styles.heading}>{dataa1}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summary}>{sum1}</Text>
          </View>

          <View>
          <Text style={styles.heading}>{dataa2}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summary}>{sum2}</Text> 
          </View>

          <View>
          <Text style={styles.heading}>{dataa3}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summary}>{sum3}</Text>  
          </View>

          <View>
          <Text style={styles.heading}>{dataa4}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summary}>{sum4}</Text> 
          </View>

          <View>
          <Text style={styles.heading}>{dataa5}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summary}>{sum5}</Text> 
          </View>

          <View>
          <Text style={styles.heading}>{dataa6}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summary}>{sum6}</Text> 
          </View>

          <View>
          <Text style={styles.heading}>{dataa7}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summary}>{sum7}</Text> 
          </View>

          <View style={{paddingTop:40, paddingLeft:75,}}>
            <Text>© designed by Pratyush Raj</Text>
          </View>

          </View>
          </ScrollView>
    );
}

const styles = StyleSheet.create({

    head:{
     
       width:500,
       height:150,
       backgroundColor:'pink',
       paddingTop:60,
       paddingLeft:30,
      
    },

    title:{
     
        fontSize:40
    },
    
    heading:{
        fontSize:30,
      
        
    },

    summary:{
        margin:10,
        backgroundColor: '#0ff'
    }

});