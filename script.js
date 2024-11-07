

//unbinds specific tooltips from menu items
//$("span").filter(":contains('Build a Burger')").append( "<b>&nbsp;Bun OOS</b>" );

    
if (window.location.href.indexOf("menuwest/WebReports/") > -1) {

			//Murdoch lists
            if ($('#cmbHospitals option[value="Murdoch Hospital"]').attr('selected',true)) {
                	
				//$('#cmbMealTimes[value="1"]').addClass('selected='true');
					
					$("#cmbServUnits option[value='96']").remove();
					$("#cmbServUnits option[value='98']").remove();
					$("#cmbServUnits option[value='99']").remove();
					$("#cmbServUnits option[value='33']").remove();
					$("#cmbServUnits option[value='34']").remove();
					$("#cmbServUnits option[value='41']").remove();
					$("#cmbServUnits option[value='40']").remove();
					$("#cmbServUnits option[value='43']").remove();
					$("#cmbServUnits option[value='35']").remove();
					$("#cmbServUnits option[value='53']").remove();
					$("#cmbServUnits option[value='101']").remove();
					$("#cmbServUnits option[value='178']").remove();
					
					$("#cmbServUnits option[value='13']").insertAfter("#cmbServUnits option[value='0']")
					$("#cmbServUnits option[value='51']").insertAfter("#cmbServUnits option[value='13']")
					$("#cmbServUnits option[value='36']").insertAfter("#cmbServUnits option[value='51']")
					$("#cmbServUnits option[value='52']").insertAfter("#cmbServUnits option[value='37']")
					$("#cmbServUnits option[value='54']").insertAfter("#cmbServUnits option[value='38']")
					$("#cmbServUnits option[value='39']").insertAfter("#cmbServUnits option[value='42']")

			}
			//Subiaco lists
          if ($('#cmbHospitals option[value="Subiaco Hospital"]').attr('selected',true)) {
			$("#cmbServUnits option[value='22']").insertBefore("#cmbServUnits option[value='0']")
			$("#cmbServUnits option[value='20']").insertAfter("#cmbServUnits option[value='22']")
			$("#cmbServUnits option[value='21']").insertAfter("#cmbServUnits option[value='20']")
			$("#cmbServUnits option[value='27']").insertAfter("#cmbServUnits option[value='21']")
			$("#cmbServUnits option[value='28']").insertAfter("#cmbServUnits option[value='27']")
		
		
		  }
		if ($('#cmbHospitals option[value="Mt Lawley Hospital"]').attr('selected',true)) {
			
			$("#cmbServUnits option[value='159']").remove();
			$("#cmbServUnits option[value='92']").remove();
			$("#cmbServUnits option[value='89']").remove();
			$("#cmbServUnits option[value='85']").remove();
		}

}




if (window.location.href.indexOf("menuwest/WebClient/myGuest/Ordering") > -1) {
	
$(".componentSpan").unbind('mouseover');	
	



function shouldFetchData() {
    const lastCheckTime = localStorage.getItem('lastJsonModifiedTime');
    
    return new Promise((resolve) => {
        $.ajax({
            type: 'HEAD',
            url: 'https://stockcc.duckdns.org/json_file.json',
            success: function(data, status, xhr) {
                const serverModifiedTime = new Date(xhr.getResponseHeader('last-modified')).getTime();
                
                if (!lastCheckTime || serverModifiedTime > parseInt(lastCheckTime)) {
                    localStorage.setItem('lastJsonModifiedTime', serverModifiedTime);
                    resolve(true);
                } else {
                    resolve(false);
                }
            },
            error: function() {
                resolve(true);
            }
        });
    });
}

const url = 'https://sjexstock.s3.ap-southeast-2.amazonaws.com/oos.json?' + new Date().getTime();
const siteID = window.parent.document.getElementById('lblHospitalId').textContent;

async function fetchIfNeeded() {
    const needsFetch = await shouldFetchData();
    let data;

    if (needsFetch) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`);
            data = await response.json();
            console.log('Fetching new data from:', url);
        } catch (error) {
            console.error('Fetch error:', error);
            return; // Stop if fetch fails
        }
    } else {
        console.log('Using cached data, no need to fetch');
        data = JSON.parse(localStorage.getItem('cachedData') || '{}');
    }

    if (data) {
        localStorage.setItem('cachedData', JSON.stringify(data));
        applyColoring(data);
    }
}

function applyColoring(data) {
    let siteName;
    if (siteID.includes('Murdoch')) {
        siteName = 'Murdoch';
    } else if (siteID.includes('Subiaco')) {
        siteName = 'Subiaco';
    } else if (siteID.includes('Mt Lawley')) {
        siteName = 'Mt Lawley';
    } else if (siteID.includes('Bendigo')) {
        siteName = 'Bendigo';
    } else if (siteID.includes('Geelong')) {
        siteName = 'Geelong';
    } else if (siteID.includes('Berwick')) {
        siteName = 'Berwick';
    } else if (siteID.includes('Ballarat')) {
        siteName = 'Ballarat';
    } else if (siteID.includes('Geraldton')) {
        siteName = 'Geraldton';
    }

    const pairings = {
        "**Bread White**": "**Toast White**",
        "**GF Bread White**": "**GF Toast White**",
        "**Bread Multigrain**": "**Toast Multigrain**",
        "**Bread Wholemeal**": "**Toast Wholemeal**",
        "**GF Bread Mixed Grain**": "**GF Toast Mixed Grain**"
    };

    if (siteName && data[siteName]) {
        data[siteName].forEach(item => {
            if (item.div_id) {
                $(`#${item.div_id}`).css("color", "magenta");
            }
            if (item.mod) {
                const relatedItem = pairings[item.mod] || item.mod;
                if (window.top !== window.self) {
                    $("span, div").filter(function() {
                        const text = $(this).text().trim();
                        return text.indexOf(item.mod) !== -1 || text.indexOf(relatedItem) !== -1;
                    }).css("color", "magenta");
                }
            }
        });
    }
}

// Call it
fetchIfNeeded();



//***Out of stock, MURDOCH



if (siteID.includes('Murdoch')) {


}



if (siteID.includes('Subiaco')) {


//Subiaco OOS



}


if (siteID.includes('Lawley')) {


}

//*** Out of stock, BENDIGO ***


if (siteID.includes('Bendigo')) {



}

		
		if (siteID.includes('Geelong')) {


//Geelong OOS

//RS KOS & Halal


}



//Berwick OSS

if (siteID.includes('Berwick')) {


}


if (siteID.includes('Ballarat')) {



}






$('#ComponentGroupItem_33_2338_2').append('<span class="tooltiptext">Capsicum<br>Broccoli<br>Carrot</span>');


    // var intervalId;

    // if ($('#lblAssignDislike').text().includes('Capsicum')) {
        // intervalId = setInterval(function() {
            // if ($('#ComponentsControlsLabelsContainer').text().includes('**Stirfry Veg**')) {
                
				
					// errorText = "Capsicum in Stirfry Veg!"
						// $('#snackbar').text(errorText).addClass('show')
						// setTimeout(function() {
						  // $('#snackbar').removeClass('show')
						// }, 3000)
         		
			// }
        // }, 2000);
    // }


//click on the notes link if the notes section contains a green tick img

if ($('#lblNotes').find('img').length > 0) {
	
  $("#lblNotesText").click();
}


 $('iframe').load(function() { 

//copy the text from the right note section into the above created box after a timer

var iframeDocument = document.getElementsByTagName('iframe')[0].contentWindow.document;

// Get the text from tbMealOrderingNotes
var mealOrderingNotes = iframeDocument.getElementById('tbMealOrderingNotes').innerHTML;

// Get the text from tbNotes
var notes = iframeDocument.getElementById('tbNotes').innerHTML;

// Combine the texts
var combinedNotes = mealOrderingNotes + '\n \n' + notes;

// Set the combined text to noteBox
document.getElementById('noteBox').innerHTML = combinedNotes;



//click cancel on notes after timer to close it

     document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnCancel').click();

    });




//Function to check the color of any div its fed, if black it will continue

function checkDivColor(divId) {

   var fontCHK = $(divId).css("color");
   
	errorText = ""
if (fontCHK === 'rgb(0, 0, 0)' )  {

return true; // Font is black
  } else {  // throw error code toast
		
	errorText = "Item(s) skipped, check order"
    $('#snackbar').text(errorText).addClass('show')
    setTimeout(function() {
      $('#snackbar').removeClass('show')
    }, 3000)

    return false; 
	
}
}





//***Breakfast***

	//Hollandaise Plain
	$('#holli1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_31_1728_2')) {
     $("#ComponentGroupItem_31_1728_2").click();
		} 
			$('iframe').load(function() {

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1497_Comp_54_1497_IncrementButton').click();	
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1497_Comp_54_1497_IncrementButton').click();
		
		var sourt = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1238_Comp_54_1238_IncrementButton');	
			if ($(sourt).length && checkDivColor('#tosour')) {
				
			sourt.click();
			sourt.click();			
			} 
						else{
				showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Hollandaise Smoked Salmon
	$('#holli2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_31_1728_2')) {
     $("#ComponentGroupItem_31_1728_2").click();
		} 
			$('iframe').load(function() {

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1497_Comp_54_1497_IncrementButton').click();	
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1497_Comp_54_1497_IncrementButton').click();
		var sourt = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1238_Comp_54_1238_IncrementButton');
	

			if ($(sourt).length && checkDivColor('#tosour')) {
				
			sourt.click();
			sourt.click();			
			}
			else{
				showSnackbar("Item(s) skipped, check order");
			}			
		var smokes = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1954_Comp_54_1954_IncrementButton');	
			if ($(smokes).length && checkDivColor('#smksalhol')) {
				
			smokes.click();			
			} 
			else{
				showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});

	//Hollandaise Ham
	$('#holli3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_31_1728_2')) {
     $("#ComponentGroupItem_31_1728_2").click();
		} 
			$('iframe').load(function() {

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1497_Comp_54_1497_IncrementButton').click();	
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1497_Comp_54_1497_IncrementButton').click();
		
		var sourt = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1238_Comp_54_1238_IncrementButton');
	
			if ($(sourt).length && checkDivColor('#tosour')) {
				
			sourt.click();
			sourt.click();			
			}
			else{
				showSnackbar("Item(s) skipped, check order");
			}			
		var hamshi = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1953_Comp_54_1953_IncrementButton');	
			if ($(hamshi).length && checkDivColor('#hamhol')) {
				
			hamshi.click();			
			} 
			else{
				showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});



	//Hollandaise Bacon
	$('#holli4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_31_1728_2')) {
     $("#ComponentGroupItem_31_1728_2").click();
		} 
			$('iframe').load(function() {

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1497_Comp_54_1497_IncrementButton').click();	
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1497_Comp_54_1497_IncrementButton').click();
		var sourt = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1238_Comp_54_1238_IncrementButton');
	

			if ($(sourt).length && checkDivColor('#tosour')) {
				
			sourt.click();
			sourt.click();			
			} 
			else{
				showSnackbar("Item(s) skipped, check order");
			}
		var bachi = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_54_1495_Comp_54_1495_IncrementButton');	
			if ($(bachi).length && checkDivColor('#bachol')) {
				
			bachi.click();			
			} 
			else{
				showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});

	//Omettle plain
	$('#ome1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_31_1010_2')) {
     $("#ComponentGroupItem_31_1010_2").click();
		} 
			$('iframe').load(function() {

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_55_930_Comp_55_930_IncrementButton').click();	
		

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Omettle with the lot
	$('#ome2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_31_1010_2')) {
     $("#ComponentGroupItem_31_1010_2").click();
		} 
			$('iframe').load(function() {

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_55_930_Comp_55_930_IncrementButton').click();	
		
		var cheom1 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_55_1894_Comp_55_1894_IncrementButton');
	

			if ($(cheom1).length && checkDivColor('#cheom')) {
				
			cheom1.click();			
			}
			else{
				showSnackbar("Item(s) skipped, check order");
			}
			
		var mushom1 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_55_939_Comp_55_939_IncrementButton');	
			if ($(mushom1).length && checkDivColor('#mushom')) {
				
			mushom1.click();			
			} 
			else{
				showSnackbar("Item(s) skipped, check order");
			}
			
		var toom1 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_55_1926_Comp_55_1926_IncrementButton');	
			if ($(toom1).length && checkDivColor('#toom')) {
				
			toom1.click();			
			} 
			else{
				showSnackbar("Item(s) skipped, check order");
			}
			
		var redom1 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_55_1956_Comp_55_1956_IncrementButton');	
			if ($(redom1).length && checkDivColor('#redom')) {
				
			redom1.click();			
			} 
			else{
				showSnackbar("Item(s) skipped, check order");
			}
			
		var hamhol1 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_55_1955_Comp_55_1955_IncrementButton');	
			if ($(hamhol1).length && checkDivColor('#hamhol')) {
				
			hamhol1.click();			
			} 
			else{
				showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Omettle with the lot
	$('#ome3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_31_1010_2')) {
     $("#ComponentGroupItem_31_1010_2").click();
		} 
			$('iframe').load(function() {

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_55_930_Comp_55_930_IncrementButton').click();	
		
		var cheom1 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_55_1894_Comp_55_1894_IncrementButton');
	

			if ($(cheom1).length && checkDivColor('#cheom')) {
				
			cheom1.click();			
			}
			else{
				showSnackbar("Item(s) skipped, check order");
			}
			
			
		var toom1 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_55_1926_Comp_55_1926_IncrementButton');	
			if ($(toom1).length && checkDivColor('#toom')) {
				
			toom1.click();			
			} 
			else{
				showSnackbar("Item(s) skipped, check order");
			}
			
			
		var hamhol1 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_55_1955_Comp_55_1955_IncrementButton');	
			if ($(hamhol1).length && checkDivColor('#hamhol')) {
				
			hamhol1.click();			
			} 
			else{
				showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});

//**Half size**

//Small fried rice
$('#friR').click(function() {

	if (checkDivColor('#ComponentGroupItem_33_1710_2')) {
     $("#ComponentGroupItem_33_1710_2").click();
	} 
	$('#div_OrderedComponentQuantitySpin_1710_33_2_0 .DGHSpinLabelButton.SpinDecrement').click();

  });
  
//Small plain rice
$('#plaR').click(function() {

	if (checkDivColor('#ComponentGroupItem_33_934_2')) {
     $("#ComponentGroupItem_33_934_2").click();
	} 
	$('#div_OrderedComponentQuantitySpin_934_33_2_0 .DGHSpinLabelButton.SpinDecrement').click();

  });
  
//Side salad
$('#garSal').click(function() {

	if (checkDivColor('#ComponentGroupItem_34_990_2')) {
     $("#ComponentGroupItem_34_990_2").click();
	} 
	$('#div_OrderedComponentQuantitySpin_990_34_2_0 .DGHSpinLabelButton.SpinDecrement').click();

  });
  
//Small casear salad
$('#casSal').click(function() {

	if (checkDivColor('#ComponentGroupItem_34_993_2')) {
     $("#ComponentGroupItem_34_993_2").click();
	} 
	$('#div_OrderedComponentQuantitySpin_993_34_2_0 .DGHSpinLabelButton.SpinDecrement').click();

  });

//Small pumkin salad
$('#pumSal').click(function() {

	if (checkDivColor('#ComponentGroupItem_34_1642_2')) {
     $("#ComponentGroupItem_34_1642_2").click();
	} 
	$('#div_OrderedComponentQuantitySpin_1642_34_2_0 .DGHSpinLabelButton.SpinDecrement').click();

  });
//***Snacks***
	
	
	
	
//Potato Wedges plain
$('#wed1').click(function() {

	if (checkDivColor('#ComponentGroupItem_33_1190_2')) {
     $("#ComponentGroupItem_33_1190_2").click();
	//Special Wedges if above not there
  } else if (checkDivColor('#ComponentGroupItem_33_1339_2')) {

	$("#ComponentGroupItem_33_1339_2").click();
    }


  });
  
  
  //Potato Wedges + Sour Cream + Sweet chili
$('#wed2').click(function() {

	if (checkDivColor('#ComponentGroupItem_33_1190_2')) {
     $("#ComponentGroupItem_33_1190_2").click();
	//Special Wedges if above not there
  } else if (checkDivColor('#ComponentGroupItem_33_1339_2')) {
	
	

	$("#ComponentGroupItem_33_1339_2").click();
    }
	//Sour Cream
	if (checkDivColor('#ComponentGroupItem_46_1024_2')) {
      // click it if font black
	  $("#ComponentGroupItem_46_1024_2").click();
    }
	//Sweet Chili
	if (checkDivColor('#ComponentGroupItem_46_1046_2')) {
    // click it if font black
	$('#ComponentGroupItem_46_1046_2').click();
    }

  });

  //Potato Wedges + Tomato
$('#wed3').click(function() {

	if (checkDivColor('#ComponentGroupItem_33_1190_2')) {
     $("#ComponentGroupItem_33_1190_2").click();

	//Special Wedges if above not there
		} else if (checkDivColor('#ComponentGroupItem_33_1339_2')) {

		$("#ComponentGroupItem_33_1339_2").click();
		}
		
	//Tomato
		if (checkDivColor('#ComponentGroupItem_46_1023_2')) {
      // click it if font black
	$("#ComponentGroupItem_46_1023_2").click();
    }
});

  //Potato Wedges + Aioli
$('#wed4').click(function() {

	if (checkDivColor('#ComponentGroupItem_33_1190_2')) {
     $("#ComponentGroupItem_33_1190_2").click();
	
	//Special Wedges if above not there
		} else if (checkDivColor('#ComponentGroupItem_33_1339_2')) {

		$("#ComponentGroupItem_33_1339_2").click();
		}
		
	//Aioli
		if (checkDivColor('#ComponentGroupItem_46_1030_2')) {
      // click it if font black
	$("#ComponentGroupItem_46_1030_2").click();
	
    }
});



  //Potato Wedges + BBQ
$('#wed5').click(function() {

	if (checkDivColor('#ComponentGroupItem_33_1190_2')) {
     $("#ComponentGroupItem_33_1190_2").click();
	
	//Special Wedges if above not there
		} else if (checkDivColor('#ComponentGroupItem_33_1339_2')) {

		$("#ComponentGroupItem_33_1339_2").click();
		}
		
	//BBQ
		if (checkDivColor('#ComponentGroupItem_46_1027_2')) {
      // click it if font black
	$("#ComponentGroupItem_46_1027_2").click();
	
    }
});

  //Potato Wedges + Gravy
$('#wed6').click(function() {

	if (checkDivColor('#ComponentGroupItem_33_1190_2')) {
     $("#ComponentGroupItem_33_1190_2").click();
	
	//Special Wedges if above not there
		} else if (checkDivColor('#ComponentGroupItem_33_1339_2')) {

		$("#ComponentGroupItem_33_1339_2").click();
		}
		
	//Gravy
		if (checkDivColor('#ComponentGroupItem_33_1301_2')) {
      // click it if font black
	$("#ComponentGroupItem_33_1301_2").click();
	
    }
});


//Scones 
  
  
$('#sco1').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1108_2')) {
     $("#ComponentGroupItem_45_1108_2").click();
	}
		
});


//Scones + jam + cream

$('#sco2').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1108_2')) {
     $("#ComponentGroupItem_45_1108_2").click();
	}
		
	//Jam
	if (checkDivColor('#ComponentGroupItem_46_1008_2')) {

	$("#ComponentGroupItem_46_1008_2").click();
	
    }
		
	//Cream
	if (checkDivColor('#ComponentGroupItem_45_1089_2')) {

	$("#ComponentGroupItem_45_1089_2").click();
	
    }
});


//Scones + jam + butter

$('#sco3').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1108_2')) {
     $("#ComponentGroupItem_45_1108_2").click();
	}
		
	//Jam
	if (checkDivColor('#ComponentGroupItem_46_1008_2')) {

	$("#ComponentGroupItem_46_1008_2").click();
	
    }
	
		//Butter
	if (checkDivColor('#ComponentGroupItem_46_1150_2')) {

	$("#ComponentGroupItem_46_1150_2").click();
	
    }
		
});


//Scones + jam

$('#sco4').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1108_2')) {
     $("#ComponentGroupItem_45_1108_2").click();
	}
	
	
	//Jam
	if (checkDivColor('#ComponentGroupItem_46_1008_2')) {

	$("#ComponentGroupItem_46_1008_2").click();
	
    }
		
});


//Scones + butter

$('#sco5').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1108_2')) {
     $("#ComponentGroupItem_45_1108_2").click();
	}
	
	
	//Butter
	if (checkDivColor('#ComponentGroupItem_46_1150_2')) {

	$("#ComponentGroupItem_46_1150_2").click();
	
    }
		
});


//Scones + honey

$('#sco6').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1108_2')) {
     $("#ComponentGroupItem_45_1108_2").click();
	}
	
	
	//Butter
	if (checkDivColor('#ComponentGroupItem_46_1014_2')) {

	$("#ComponentGroupItem_46_1014_2").click();
	
    }
		
});

//Banana Bread

$('#banabre').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1112_2')) {
		
     $("#ComponentGroupItem_45_1112_2").click();
	}
		$('iframe').load(function() { 
 
	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
	    })
		
		$("#ComponentGroupItem_46_1150_2").click();
});


//Banana Bread toasted

$('#banabr1').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1112_2')) {
		
     $("#ComponentGroupItem_45_1112_2").click();
	}
		$('iframe').load(function() { 
 
	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_38_1564_Comp_38_1564_IncrementButton').click();
	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
	    })
		
		$("#ComponentGroupItem_46_1150_2").click();
});

//Custard

$('#cus1').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1102_2')) {
		
     $("#ComponentGroupItem_45_1102_2").click();
	}
		$('iframe').load(function() { 
 
	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
	    })
});


//Custard HOT

$('#cus2').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1102_2')) {
     $("#ComponentGroupItem_45_1102_2").click();
	}
		//Wait for iframe
		$('iframe').load(function() { 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_42_1563_Comp_42_1563_IncrementButton').click();
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		 })
		
});



//Brownie

$('#brn1').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1091_2')) {
     $("#ComponentGroupItem_45_1091_2").click();
	}
			//Wait for iframe
		$('iframe').load(function() { 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		 })
		
});

//Brownie HOT

$('#brn2').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1091_2')) {
     $("#ComponentGroupItem_45_1091_2").click();
	}
		//Wait for iframe
		$('iframe').load(function() { 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_42_1563_Comp_42_1563_IncrementButton').click();
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
		
});


//**apple pie


$('#appPie').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1093_2')) {
		
     $("#ComponentGroupItem_45_1093_2").click();
	}
		$('iframe').load(function() { 
 
	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
	    })
		
		
});


//**apple pie + whipped


$('#appPie2').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1093_2')) {
		
     $("#ComponentGroupItem_45_1093_2").click();
	}
		$('iframe').load(function() { 
 
	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
	    })
		if (checkDivColor('#ComponentGroupItem_45_1089_2')) {
		$("#ComponentGroupItem_45_1089_2").click();
		}
});

//**apple pie + ice cream

$('#appPie3').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1093_2')) {
		
     $("#ComponentGroupItem_45_1093_2").click();
	}
		$('iframe').load(function() { 
 
	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
	    })
		if (checkDivColor('#ComponentGroupItem_45_1103_2')) {
		$("#ComponentGroupItem_45_1103_2").click();
		}
});


//**apple pie + ice cream + whipped

$('#appPie4').click(function() {

	if (checkDivColor('#ComponentGroupItem_45_1093_2')) {
		
     $("#ComponentGroupItem_45_1093_2").click();
	}
		$('iframe').load(function() { 
 
	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
	    })
		if (checkDivColor('#ComponentGroupItem_45_1103_2')) {
		$("#ComponentGroupItem_45_1103_2").click();
		}
		
		if (checkDivColor('#ComponentGroupItem_45_1089_2')) {
		$("#ComponentGroupItem_45_1089_2").click();
		}
});

//**Mini pies 2x

$('#meatPie').click(function() {

	if (checkDivColor('#ComponentGroupItem_35_1154_2')) {
		
     $("#ComponentGroupItem_35_1154_2").click();
	}
		
	$('#div_OrderedComponentQuantitySpin_1154_35_2_0 .SpinIncrement').click();
		
});

//**Sandwiches***********

  //Sandwiches
$('#sw1').click(function() {
	//check if builder is gone entirely, unlikely to be red or OOS
	if (checkDivColor('#ComponentGroupItem_32_1082_2')) {
     $("#ComponentGroupItem_32_1082_2").click();
	
	} 
 $('iframe').load(function() { 
 
 
//Ham color check, skip if not black
var labelText = $('#Comp_51_1015_Comp_51_1015_IncrementButton').closest('.row').find('.DGLABEL').text();

	if (checkDivColor(labelText)) {


			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_51_1015_Comp_51_1015_IncrementButton').click();
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();

		}
	
	
	})
});


//**Stiry Frys***********



$('#stckhok').click(function() {

var Stirchk = $('#ComponentGroupItem_33_2338_2');				
			if ($(Stirchk).length) {
			Stirchk.click();
			}
			
			
$('iframe').load(function() { 



			//Stir fry veg

			var iframe = $('#mainPnl');
			var iframeContent = iframe.contents();
			var targetSpan = iframeContent.find('span:contains("Veg")').css('color');


			
			var stirVg = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_51_2339_Comp_51_2339_IncrementButton');				
			// Chicken
			var stirChk = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_51_2335_Comp_51_2335_IncrementButton');				
			// Soy glaze
			var stirSoy = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_41_2341_Comp_41_2341_IncrementButton');				
			// Hokkien noodles
			var stirHok = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_42_1627_Comp_42_1627_IncrementButton');					
		
		if ($targetSpan === 'rgb(0, 0, 0)' )  {
			console.log(targetSpan);
			stirVg.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		});
	
	
	
	
});

			

	
			//Stir fry veg
			//var stirvegCol = $('.DGLABEL:contains("Veg")').css("color");
			 
			 



			
			// var stirVg = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_51_2339_Comp_51_2339_IncrementButton');				
			// Chicken
			// var stirChk = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_51_2335_Comp_51_2335_IncrementButton');				
			// Soy glaze
			// var stirSoy = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_41_2341_Comp_41_2341_IncrementButton');				
			// Hokkien noodles
			// var stirHok = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_42_1627_Comp_42_1627_IncrementButton');					
		
		// if ($(stirVg).length) {

			// stirVg.click();
			// }
			// else {
			// showSnackbar("Item(s) skipped, check order");
			// }
			// document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			// document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			// document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		// })




//***COFFEE***


	//Coffee Black No Sugar
	$('#cof1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Coffee Black 1x Sug
	$('#cof2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() {
			
	
			
			var sug4 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug4).length) {
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		})
});


	//Coffee Black 2x Sug
	$('#cof3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
			var sug4 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug4).length) {
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		
			
		})
});

	//Coffee Black 1x Equal
	$('#cof4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		})
});

	//Coffee Black 2x Equal
	$('#cof5').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
 
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		})
});



	//Coffee FC No Sug
	$('#cofc1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Coffee FC 1x Sug
	$('#cofc2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
					if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
			var sug4 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug4).length) {
			
			sug4.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
			
});


	//Coffee FC 2x Sug
	$('#cofc3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
			} 
			var sug4 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug4).length) {
			
			sug4.click();
			sug4.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});

	//Coffee FC 1x equal
	$('#cofc4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
	$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})

	
});

	//Coffee FC 2x equal
	$('#cofc5').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});





	//Coffee Hi-lo No Sug
	$('#cofhi1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Coffee Hi-lo 1x Sug
	$('#cofhi2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Hi-lo 2x Sug
	$('#cofhi3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Hi-lo 1x equl
	$('#cofhi4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Coffee Hi-lo 2x equl
	$('#cofhi5').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Coffee Skim
	$('#cofski1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		




			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Skim 1x sug
	$('#cofski2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}


			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});

	//Coffee Skim 2x sug
	$('#cofski3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}


			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Skim 1x equal
	$('#cofski4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});

	//Coffee Skim 1x equal
	$('#cofski5').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Coffee low lac 
	$('#lacmlk').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});

	//Coffee Lowlac No Sug
	$('#coflowlac').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Coffee Lowlac 1x Sug
	$('#coflowlac1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Lowlac 2x Sug
	$('#coflowlac2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Lowlac 1x equl
	$('#coflowlac3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Coffee Lowlac 2x equl
	$('#coflowlac4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Soy No Sug
	$('#cofsoy').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Coffee Soy 1x Sug
	$('#cofsoy1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Soy 2x Sug
	$('#cofsoy2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Soy 1x equl
	$('#cofsoy3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Coffee Soy 2x equl
	$('#cofsoy4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Almond No Sug
	$('#cofalm').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Coffee Almond 1x Sug
	$('#cofalm1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Almond 2x Sug
	$('#cofalm2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Coffee Almond 1x equl
	$('#cofalm3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Coffee Almond 2x equl
	$('#cofalm4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1121_2')) {
     $("#ComponentGroupItem_47_1121_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});




//*** Decaff Coffee ***




	//Decaf Coffee Black No Sugar
	$('#decof').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Decaf Coffee Black 1x Sug
	$('#decof1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() {
			
	
			
			var sug4 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug4).length) {
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		})
});


	//Decaf Coffee Black 2x Sug
	$('#decof2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
			var sug4 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug4).length) {
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		
			
		})
});

	//Decaf Coffee Black 1x Equal
	$('#decof3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		})
});

	//Decaf Coffee Black 2x Equal
	$('#decof4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
 
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		})
});



	//Decaf Coffee FC No Sug
	$('#decofc').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Decaf Coffee FC 1x Sug
	$('#decofc1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
					if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
			var sug4 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug4).length) {
			
			sug4.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
			
});


	//Decaf Coffee FC 2x Sug
	$('#decofc2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
			} 
			var sug4 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug4).length) {
			
			sug4.click();
			sug4.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});

	//Decaf Coffee FC 1x equal
	$('#decofc3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
	$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})

	
});

	//Decaf Coffee FC 2x equal
	$('#decofc4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});





	//Decaf Coffee Hi-lo No Sug
	$('#decohi').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Decaf Coffee Hi-lo 1x Sug
	$('#decohi1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Hi-lo 2x Sug
	$('#decohi2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Hi-lo 1x equl
	$('#decohi3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Decaf Coffee Hi-lo 2x equl
	$('#decohi4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Decaf Coffee Skim
	$('#decosk').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		




			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Skim 1x sug
	$('#decosk1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}


			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});

	//Decaf Coffee Skim 2x sug
	$('#decosk2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}


			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Skim 1x equal
	$('#decosk3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});

	//Decaf Coffee Skim 2x equal
	$('#decosk4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Lowlac No Sug
	$('#decalac').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Decaf Coffee Lowlac 1x Sug
	$('#decalac1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Lowlac 2x Sug
	$('#decalac2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Lowlac 1x equl
	$('#decalac3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Decaf Coffee Lowlac 2x equl
	$('#decalac4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Soy No Sug
	$('#decasoy').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Decaf Coffee Soy 1x Sug
	$('#decasoy1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Soy 2x Sug
	$('#decasoy2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Soy 1x equl
	$('#decasoy3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Decaf Coffee Soy 2x equl
	$('#decasoy4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Almond No Sug
	$('#decalm').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Decaf Coffee Almond 1x Sug
	$('#decalm1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Almond 2x Sug
	$('#decalm2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Decaf Coffee Almond 1x equl
	$('#decalm3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Decaf Coffee Almond 2x equl
	$('#decalm4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1122_2')) {
     $("#ComponentGroupItem_47_1122_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



//*** Tea English BF ***

	//Tea Black no sug
	$('#teab').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
 

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		})
});



	//Tea Black 1x sug
	$('#tea1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
 

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		})
});

	//Tea Black 2x sug
	$('#tea2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
 

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		})
});

	//tea black 1 equal
	$('#tea3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		})
});

	//tea black 2 equal
	$('#tea3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			
		})
});



	//Tea FC no sug
	$('#teafc').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});

	//Tea FC 1x sug
	$('#teafc1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});

	//Tea FC  2x sug
	$('#teafc2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});



	//Tea FC 1x equal
	$('#teafc3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Tea FC 2x equal
	$('#teafc4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#fcmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1525_Comp_43_1525_IncrementButton').click();
		} 
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});






	//Tea Hi-lo No Sug
	$('#Hitee').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Tea Hi-lo 1x Sug
	$('#Hitee1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Hi-lo 2x Sug
	$('#Hitee2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Hi-lo 1x equl
	$('#Hitee3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Tea Hi-lo 2x equl
	$('#Hitee4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#himlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1531_Comp_43_1531_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Tea Skim
	$('#Teask').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		




			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Skim 1x sug
	$('#Teask1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}


			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});

	//Tea Skim 2x sug
	$('#Teask2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}


			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Skim 1x equal
	$('#Teask3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});

	//Tea Skim 2x equal
	$('#Teask4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#skmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1529_Comp_43_1529_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}

			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Lowlac No Sug
	$('#Tealac').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Tea Lowlac 1x Sug
	$('#Tealac1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Lowlac 2x Sug
	$('#Tealac2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Lowlac 1x equl
	$('#Tealac3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Tea Lowlac 2x equl
	$('#Tealac4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#lacmlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1528_Comp_43_1528_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Soy No Sug
	$('#Teaso').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Tea Soy 1x Sug
	$('#Teaso1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Soy 2x Sug
	$('#Teaso2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Soy 1x equl
	$('#Teaso3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Tea Soy 2x equl
	$('#Teaso4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#soymlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1527_Comp_43_1527_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Almond No Sug
	$('#Teaal').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
		$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
 
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Tea Almond 1x Sug
	$('#Teaal1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Almond 2x Sug
	$('#Teaal2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		
		var sug2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1957_Comp_43_1957_IncrementButton');				
			if ($(sug2).length) {
			
				sug2.click();
				sug2.click();

			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});



	//Tea Almond 1x equl
	$('#Teaal3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});


	//Tea Almond 2x equl
	$('#Teaal4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1123_2')) {
     $("#ComponentGroupItem_47_1123_2").click();
		} 
			$('iframe').load(function() { 
			
		if (checkDivColor('#almlk')) {
		document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1526_Comp_43_1526_IncrementButton').click();
		} 
		
			var equ2 = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_1958_Comp_43_1958_IncrementButton');				
			if ($(equ2).length) {
			
				equ2.click();
				equ2.click();
			}
			else {
			showSnackbar("Item(s) skipped, check order");
			}
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
			})
});




//***Herbal Teas***

	//Green tea no extra
	$('#gret').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1124_2')) {
     $("#ComponentGroupItem_47_1124_2").click();
		} 
			$('iframe').load(function() { 
					
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});



	//Green tea extra bag
	$('#gret1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1124_2')) {
     $("#ComponentGroupItem_47_1124_2").click();
		} 
			$('iframe').load(function() { 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_2306_Comp_43_2306_IncrementButton').click();			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Peppermint tea no extra
	$('#pepm').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1126_2')) {
     $("#ComponentGroupItem_47_1126_2").click();
		} 
			$('iframe').load(function() { 
					
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});



	//peppermint tea extra bag
	$('#pepm1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1126_2')) {
     $("#ComponentGroupItem_47_1126_2").click();
		} 
			$('iframe').load(function() { 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_2306_Comp_43_2306_IncrementButton').click();			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});

	//Chamomile tea no extra
	$('#chamo').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1125_2')) {
     $("#ComponentGroupItem_47_1125_2").click();
		} 
			$('iframe').load(function() { 
					
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});

	//Chamomile tea extra bag
	$('#chamo1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1125_2')) {
     $("#ComponentGroupItem_47_1125_2").click();
		} 
			$('iframe').load(function() { 
					
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_2306_Comp_43_2306_IncrementButton').click();	
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//chamomile tea extra bag
	$('#gret1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1124_2')) {
     $("#ComponentGroupItem_47_1124_2").click();
		} 
			$('iframe').load(function() { 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_2306_Comp_43_2306_IncrementButton').click();			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});

	//lemongrass tea
	$('#legr').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1272_2')) {
     $("#ComponentGroupItem_47_1272_2").click();
		} 
			$('iframe').load(function() { 
					
		
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//lemongrass tea extra bag
	$('#legr1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_1272_2')) {
     $("#ComponentGroupItem_47_1272_2").click();
		} 
			$('iframe').load(function() { 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_43_2306_Comp_43_2306_IncrementButton').click();			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});

//***All Milks***
		
		
	//Full Cream Milk Cold
	$('#mlk1').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_900_2')) {
     $("#ComponentGroupItem_47_900_2").click();
		} 
			$('iframe').load(function() { 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Full Cream Milk Hot
	$('#mlk2').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_900_2')) {
     $("#ComponentGroupItem_47_900_2").click();
		} 
			$('iframe').load(function() { 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_42_1563_Comp_42_1563_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});



	//Hilo Milk Cold
	$('#mlk3').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_899_2')) {
     $("#ComponentGroupItem_47_899_2").click();
		} 
			$('iframe').load(function() { 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Hilo Milk Hot
	$('#mlk4').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_899_2')) {
     $("#ComponentGroupItem_47_899_2").click();
		} 
			$('iframe').load(function() { 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_42_1563_Comp_42_1563_IncrementButton').click();			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});

	//Skim Milk Cold
	$('#mlk5').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_901_2')) {
     $("#ComponentGroupItem_47_901_2").click();
		} 
			$('iframe').load(function() { 
 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Skim Milk Hot
	$('#mlk6').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_901_2')) {
     $("#ComponentGroupItem_47_901_2").click();
		} 
			$('iframe').load(function() { 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_42_1563_Comp_42_1563_IncrementButton').click();	
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Lactose Free Cold
	$('#mlk7').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_961_2')) {
     $("#ComponentGroupItem_47_961_2").click();
		} 
			$('iframe').load(function() { 
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});


	//Lactose Free Hot
	$('#mlk8').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_961_2')) {
     $("#ComponentGroupItem_47_961_2").click();
		} 
			$('iframe').load(function() { 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_42_1563_Comp_42_1563_IncrementButton').click();	
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});



	//Soy Cold
	$('#mlk9').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_902_2')) {
     $("#ComponentGroupItem_47_902_2").click();
		} 
			$('iframe').load(function() { 
			
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});



	//Soy Hot
	$('#mlk10').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_902_2')) {
     $("#ComponentGroupItem_47_902_2").click();
		} 
			$('iframe').load(function() { 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_42_1563_Comp_42_1563_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});



	//Almond Milk Cold
	$('#mlk11').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_966_2')) {
     $("#ComponentGroupItem_47_966_2").click();
		} 
			$('iframe').load(function() { 		
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});



	//Almond Milk Hot
	$('#mlk12').click(function() {
	//check if milk is OOS, missing or red
	if (checkDivColor('#ComponentGroupItem_47_966_2')) {
     $("#ComponentGroupItem_47_966_2").click();
		} 
			$('iframe').load(function() { 
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('Comp_42_1563_Comp_42_1563_IncrementButton').click();
			document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('btnNext_txt').click();
		})
});




	//end of if statement for meal order page
}
		




