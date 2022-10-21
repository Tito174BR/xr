function TentarSomar() 
{  
  alert('Realizando a soma dos numeros, agurde um momento...');

  var media = n1, n2, n3, n4, n5, n6, n7, n8;
  var n1 = parseInt(document.getElementById('n1').value);
  var n2 = parseInt(document.getElementById('n2').value);
  var n3 = parseInt(document.getElementById('n3').value);
  var n4 = parseInt(document.getElementById('n4').value);
  var n5 = parseInt(document.getElementById('n5').value);
  var n6 = parseInt(document.getElementById('n6').value);
  var n7 = parseInt(document.getElementById('n7').value);
  var n8 = parseInt(document.getElementById('n8').value);
  soma_dos_numeros = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8);

	media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8)/8;
	// aaaaaaaaa
  console.log(media)
  console.log(n1 + n2 + n3 + n4 + n5)
//   alert("O resultado das somas é igual a : ");
  document.getElementById('resultado').value = soma_dos_numeros;
	// alert("E a media é:" )
	document.getElementById('media').value = media;
}