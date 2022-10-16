
let qstring="";
function insert(num)
{
  qstring=qstring+num;
   document.querySelector('input').value=qstring;
}
  
  function equals()
  {
     qstring=eval(qstring);
     document.querySelector('input').value=qstring;
  }
  
  function clean()
  {
    qstring="";
     document.querySelector('input').value=qstring;
  }
  
  function back()
  {
    qstring=qstring.slice(0, -1);
    document.querySelector('input').value=qstring;
  }