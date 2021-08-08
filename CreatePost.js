import React from 'react';
import { Text, View, StyleSheet,Image, SafeAreaView, DropDownPicker, ScrollView } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

export default class CreatePostScreen extends Component{
    render(){
        return(
<View style={styles.container}>

<SafeAreaView style={styles.droidSafeArea}/>

<View style ={styles.appTitle}>
    
    <View style={styles.appIcon}>

<Image
source={require("../assets/logo.png")}
style={styles.iconImage}
></Image>
    </View>

<View style={styles.appTitleTextContainer}>

<Text style={appTitleText}>Create A Post Here</Text>

</View>

</View>

<View style={styles.fieldsContainer}>

    <ScrollView>

<Image
source={preview_images[this.state.previewImage]}
style={styles.previewImage}
></Image>

<View style={{ height:
RFValue(this,state,dropDownHeight)}}>

<DropDownPicker

items={[
    {label:"Image 1", value: "image_1"},
    {label:"Image 2", value: "image_2"},
    {label:"Image 3", value: "image_3"},
    {label:"Image 4", value: "image_4"},
    {label:"Image 5", value: "image_5"},
    {label:"Image 6", value: "image_6"},
    {label:"Image 7", value: "image_7"},
]}

defaultValue={this.state.previewImage}

container={{
    height:40,
    borderRadius:20,
    marginBottom:10
}}

onOpen={() =>{
    this.setState({ dropDownHeight:170});
}}

onClose={() => {
    this.setState({ dropDownHeight:40});
}}
style={{backgroundColor:"transparent"}}
itemStyle={{
    justifyContent:"flex-start"
}}

labelstyle={{
    color:"white"
}}

arrowStyle={{
    color:"white"
}}

onChangeItem={item =>

this.setState({
previewImage: item.value
})
}
/>

</View>

<TextInput
style={styles.inputFont}
onChangeText={caption => this.setState({ caption
})}
placeholder={"Caption"}
placeholderTextColor="white"
/>



    </ScrollView>
</View>
<View style={{flex:0.08}}/>
</View>

            
        )
    }
}