class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("SUBMIT")
        this.greeting=createElement("h2")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        var title=createElement("h1")
        title.html("CAR RACING GAME")
        title.position(130,20)

        
        this.input.position(130,160)

        
        this.button.position(250,200)
        this.button.mousePressed(()=>{
          this.input.hide()
           this.button.hide()
           player.name=this.input.value()
           playercount=playercount+1
           player.index=playercount
           player.update()
           
           player.updatecount(playercount)
           
           this.greeting.html("HELLO "+player.name)
           this.greeting.position(200,200)
        })
    }
}