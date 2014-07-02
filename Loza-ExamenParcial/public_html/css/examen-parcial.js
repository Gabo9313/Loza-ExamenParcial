
        
     Ext.application({
    name:'valor subtotal',
    launch:function(){
        Ext.create('Ext.form.Panel',{
        fullscreen:true,
        items:[ 
            {
                xtype:'textfield',
                label:'iva',
               placeHolder:'tu valor es ',
               id:'valor'
       
            },
            {
                xtype:'textfield',
                label:'RetencionIVA',
                placeHolder:'iva',
                id:'subtotal'
            },
           
                {
                xtype:'textfield',
                label:'Isr',
                placeholder:'isr',
                id:'total a pagar'
                  
                }, 
        
                {
            xtype:'button',
            text:'calcular valor ',
            ui:'confirm',   
            handler:function(){
             
            var valor= Ext.getCmp('valor').getValue();
                  
            var valorsubtotal=Ext.getCmp('valor de subtotal').getValue();
              
            var valor=iva="subtotal"*0.16;
           var valor=Ret_va="iva"/3*2;
           ISR="subtotal"*0.10;
           TOTAL_PAGAR=SUBTOTAL+RET_IVA-IVA-ISR;
            
            }
                },
            {
                html:'Resultado',
                id:'resultado'
            }
            
        ]
        });
    } 
    
    
      