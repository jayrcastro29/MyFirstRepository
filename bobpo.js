var Num ={
    NumOfBob:function (){
            var string = "Hello World";
            console.log(string);

            var sibobobpo = "sibobobobpobob";

            console.log("No. of letters: "+sibobobpo.length);

            var varlength = sibobobpo.length;
            console.log(Num.counter(sibobobpo,varlength));

    },
    counter:function(a,b){
           var count = 0
            for(x= 0 ; x<b; x++)
            {
                if(a[x] == "b")
                {
                    if(a[x+1] == "o")
                    {
                        if(a[x+2]== "b")
                        {
                         count = count + 1;    
                        }
                    }
                }   
            }

            return count;
    }
}