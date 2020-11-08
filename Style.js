function revealsignup()
{
	$("#register").show();
	$("#login").hide();
}
function reveallogin()
{
	$("#register").hide();
	$("#login").show();
}
$( document ).ready(function() {
    console.log( "ready!" );
    $("#register").hide();
    $("#register-link").on("click",
    	function()
    	{
    		revealsignup();
    	}
    	);
      $("#login-link").on("click",
    	function()
    	{
    		reveallogin();
    	}
    	);
});