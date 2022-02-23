const handleSignOut = () => {
    auth
        .signOut()
        .then(() => {
            //navigation.replace("Login")
        })
        .catch(error => alert(error.message))
}

const textInputChange = (val) => {
    if (val.trim().length >= 4) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}

const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
        setData({
            ...data,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            isValidUser: false
        });
    }
}

const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
        return userName == item.username && password == item.password;
    });
    if (data.username.length == 0 || data.password.length == 0) {
        Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
            { text: 'Okay' }
        ]);
        return;
    }
    if (foundUser.length == 0) {
        Alert.alert('Invalid User!', 'Username or password is incorrect.', [
            { text: 'Okay' }
        ]);
        return;
    }
    signIn(foundUser);
}