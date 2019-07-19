const rules = {
    name: {
        username: ({ value }) => {
        // eslint-disable-next-line no-useless-escape
        const matchCase = value.match(/^.+@[^\.].*\.[a-z]{2,}$/)
        return matchCase && matchCase.length > 0 ? true : false
      },
      password: ({ value }) => {
        const matchCase = value.match(/^([a-zA-Z0-9@*#]{8,15})$/)
        return matchCase && matchCase.length > 0 ? true : false
      },
    },
}

const messages = {
    name: {
        username: {
            missing: 'User name cannot be empty',
            invalid: 'Invalid User Name',
        },
        password: {
            missing: 'Password cannot be empty',
            invalid: 'Invalid Password',
        },
    },
}

export { rules, messages }