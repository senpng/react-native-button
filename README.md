# react-native-button

# Example

```javascript
<Button
        style={[Styles.navBarButton,style]}
        onPress={onPress}>
        <View style={{flex:1,flexDirection:'row'}}>
            <Image source={icon} />
            <Text style={[Styles.navBarText,Styles.navBarButtonText]}>
                    {title}
            </Text>
        </View>
</Button>
```