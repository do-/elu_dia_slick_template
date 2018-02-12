define ([], function () {

    $_DO.cancel_users = function (e) {
        
        if (!confirm ('Отменить несохранённые правки?')) return

        var data = w2ui ['form'].record
        
        if (data.fake > 0) {
        
            window.close ()
        
        }
        else {
        
            query ({}, {}, function (data) {

                data.__read_only = true

                $_F5 (data)

            })
        
        }

    }

    $_DO.pass_users = function (e) {

        use.block ('user_password')

    }
    
    $_DO.edit_users = function (e) {

        var data = w2ui ['form'].record

        data.__read_only = false
        
        var $form = w2ui ['form']
                
        $_F5 (data)

    }

    $_DO.update_users = function (e) {
    
        if (!confirm ('Сохранить изменения?')) return
        
        var d = w2ui ['form'].values ()
         
        w2ui ['form'].lock ();
    
        query ({action: 'update'}, {data: d}, function (data) {
                  
           location.reload ()
       
        })
        
    }

    $_DO.choose_tab_user = function (e) {

        localStorage.setItem ('user.active_tab', e.tab.id)

        use.block (e.tab.id)

    }

    return function (done) {
    
        query ({}, {}, function (data) {
        
            data.active_tab = localStorage.getItem ('user.active_tab') || 'user_options'
            
            data.__read_only = true
            
            done (data)

        })
        
    }
    
})