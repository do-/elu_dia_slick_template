$_DRAW.login = async function (data) {

    let $body = $('body').html (await use.html ('login'))

    $('div.login-inner').w2form ({

        name   : 'form',            
        header : 'Вход в систему',

        fields : [
            {field: 'login',    type: 'text',   },
            {field: 'password', type: 'password'},
        ],

        actions: {            
            'execute': {caption: 'Войти', onClick: $_DO.execute_login},                                
        }
        
    })
    
    $('input[name=login]').keypress    (function (e) {if (e.which == 13) $('input[name=password]').focus ()})
    $('input[name=password]').keypress (function (e) {if (e.which == 13) $_DO.execute_login ()})
    
    return $body

}