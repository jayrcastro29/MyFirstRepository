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

var Substrings = {
    LongestSub:function(){
        var s = "azcbobobegghakl"
        var sliced;
        var temp = 0;
        var start, end;
        for(x=0; x<s.length; x++){
             var counter = 1;
             i=x;
            while(s[i]<=s[i+1]){
                if(s[x]<= s[x+1]){
                    counter += 1;
                    if(counter>temp){
                    temp=counter;
                    start = x;
                    }
                }
            i++;
            }
        }
        end = temp+ start;
        sliced = s.slice(start,end)
     console.log(sliced);
    }
}




//dajfhakjfhsdkjhfkj
//edited
//edit