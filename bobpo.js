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

var Substring={
    LongestSubs:function(){

        var s = "azcbobobegghakl";
        var sublength = 0;

        for( x=0; x< s.length; x++){   
               while(s[x]<=s[x+1]){
                sublength=sublength+1;
               }
        }

    console.log(`Longest substring in alphabetical order is: ${sublength}`);
   }
}
//dajfhakjfhsdkjhfkj
//edited
//edit