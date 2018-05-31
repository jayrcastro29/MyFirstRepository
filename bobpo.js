let Num ={
    NumOfBob(){
            var string = "Hello World";
            console.log(string);

            var sibobobpo = "sibobobobpobob";

            console.log("No. of letters: "+sibobobpo.length);

            var varlength = sibobobpo.length;
            console.log(Num.counter(sibobobpo,varlength));

    },

    counter(a,b){
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


let Substrings = {
    LongestSub(){
        const s = 'azcbobobegghakl'
        let sliced, temp = 0, start, end, counter, i;

        for(x=0; x<s.length; x++){
              counter = 1; // initialize
              i=x;
            while(s[i]<=s[i+1]){ //Loop as long as the letters are still in alphabetical order
                    counter += 1;
                    if(counter>temp){
                    temp=counter; //gets the length of the longest alphabetically ordered letters...
                    start = x; //gets the index of the first letter in the longest alphabetically ordered letters...
                    }
            i++;
            }
        }
        end = temp+start; 
        console.log(s.slice(start,end));
 
    }
}


//dajfhakjfhsdkjhfkj
//edited
//edit