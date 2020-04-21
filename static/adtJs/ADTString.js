function ADTString()/*{{{*/
{
	this.webVersion           = '1.0.2'
  this.isProd               = true;

   	if(!this.isProd)
   	{
    	//*******************************TESTING*************************************
        this.serviceHost      = '127.0.0.1' 
        this.AdTominPort      = '8000'
  	}
   	else
   	{
       	//************************************PROD***********************************
       	this.serviceHost      = 'http://adtomin.pythonanywhere.com' 
        this.AdTominPort      = ''
   	}
}


var adtString = new ADTString();