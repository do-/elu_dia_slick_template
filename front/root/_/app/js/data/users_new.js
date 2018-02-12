define ([], function () {

    $_DO.update_users_new = function (e) {
    
        var f = w2ui ['users_new_form']

        var v = f.values ()
        
        if (!v.id_role) die ('id_role', 'Укажите, пожалуйста, роль')
        if (!v.label)   die ('label', 'Укажите, пожалуйста, ФИО пользователя')
        if (!v.login)   die ('login', 'Укажите, пожалуйста, login пользователя')
        
        f.lock ()

        query ({action: 'create'}, {data: v}, function (data) {

            openTab ('/users/' + data.uuid)
            
            w2popup.close ()
        
        })
    
    }

    return function (done) {
                    
        done ($('body').data ('data'))
            
    }
    
})