class Game{
    constructor(){

    }
    Getstate(){
        database.ref("gamestate").on("value",(data)=>{
            gamestate=data.val()
        })
    }
    updatestate(state){
        database.ref("/").update({
            gamestate:state
        })
    }
    async start(){
        if(gamestate===0){
            player=new Player()
            var playercountref= await database.ref("playercount").once("value")
            if(playercountref.exists()){
                playercount=playercountref.val()
                player.Getcount()
            }
          
            form = new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        textSize(35)
        text("GAME STARTED",120,100)
        Player.getplayerinfo()
        if(allplayers!==undefined){
            var position=128
            for(var plr in allplayers){
                position=position+20
                textSize(15)
                text(allplayers[plr].name+":"+allplayers[plr].distance,125,position)
            }
            
        }
    }
}