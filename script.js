// Grayscale Slider
function change() {
  const img = document.querySelector(".image");
  const range = document.querySelector(".range");
  img.style.filter = `contrast(${range.value}%)`;
}

//Next and Previous buttons
var img = new Array(
  “./images/sub1-1.png",
  “images/Sub_2-colormap_1.png",
//   “images/Sub_3-colormap_1.png",
//   “images/Sub_4-colormap_1.png",
//   “images/Sub_5-colormap_1.png",
//   “images/Sub_6-colormap_1.png",
//   “images/Sub_7-colormap_1.png",
//   “images/Sub_8-colormap_1.png",
//   “images/Sub_9-colormap_1.png",
//   “images/Sub_10-colormap_1.png",
//   “images/Sub_11-colormap_1.png",
//   “images/Sub_12-colormap_1.png",
//   “images/Sub_13-colormap_1.png",
//   “images/Sub_14-colormap_1.png",
//   “images/Sub_15-colormap_1.png",
//   “images/Sub_16-colormap_1.png",
//   “images/Sub_17-colormap_1.png",
//   “images/Sub_18-colormap_1.png",
//   “images/Sub_19-colormap_1.png",
//   “images/Sub_20-colormap_1.png",
//   “images/Sub_21-colormap_1.png",
//   “images/Sub_22-colormap_1.png",
//   “images/Sub_23-colormap_1.png",
//   “images/Sub_24-colormap_1.png",
//   “images/Sub_25-colormap_1.png",
//   “images/Sub_26-colormap_1.png",
//   “images/Sub_27-colormap_1.png",
//   “images/Sub_28-colormap_1.png",
//   “images/Sub_29-colormap_1.png",
//   “images/Sub_30-colormap_1.png",
//   “images/Sub_31-colormap_1.png",
//   “images/Sub_32-colormap_1.png",
//   “images/Sub_33-colormap_1.png",
//   “images/Sub_34-colormap_1.png",
//   “images/Sub_35-colormap_1.png",
//   “images/Sub_36-colormap_1.png",
//   “images/Sub_37-colormap_1.png",
//   “images/Sub_38-colormap_1.png",
//   “images/Sub_39-colormap_1.png",
//   “images/Sub_40-colormap_1.png",
//   “images/Sub_41-colormap_1.png",
//   “images/Sub_42-colormap_1.png",
//   “images/Sub_43-colormap_1.png",
//   “images/Sub_44-colormap_1.png",
//   “images/Sub_45-colormap_1.png",
//   “images/Sub_46-colormap_1.png",
//   “images/Sub_47-colormap_1.png",
//   “images/Sub_48-colormap_1.png",
//   “images/Sub_49-colormap_1.png",
//   “images/Sub_50-colormap_1.png",
//   “images/Sub_51-colormap_1.png",
//   “images/Sub_52-colormap_1.png",
//   “images/Sub_53-colormap_1.png",
//   “images/Sub_54-colormap_1.png",
//   “images/Sub_55-colormap_1.png",
//   “images/Sub_56-colormap_1.png",
//   “images/Sub_57-colormap_1.png",
//   “images/Sub_58-colormap_1.png",
//   “images/Sub_59-colormap_1.png",
//   “images/Sub_60-colormap_1.png",
//   “images/Sub_61-colormap_1.png",
//   “images/Sub_62-colormap_1.png",
//   “images/Sub_63-colormap_1.png",
//   “images/Sub_64-colormap_1.png",
//   “images/Sub_65-colormap_1.png",
//   “images/Sub_66-colormap_1.png",
//   “images/Sub_67-colormap_1.png",
//   “images/Sub_68-colormap_1.png",
//   “images/Sub_69-colormap_1.png",
//   “images/Sub_70-colormap_1.png",
//   “images/Sub_71-colormap_1.png",
//   “images/Sub_72-colormap_1.png",
//   “images/Sub_73-colormap_1.png",
//   “images/Sub_74-colormap_1.png",
//   “images/Sub_75-colormap_1.png",
//   “images/Sub_76-colormap_1.png",
//   “images/Sub_77-colormap_1.png",
//   “images/Sub_78-colormap_1.png",
//   “images/Sub_79-colormap_1.png",
//   “images/Sub_80-colormap_1.png",
//   “images/Sub_81-colormap_1.png",
//   “images/Sub_82-colormap_1.png",
//   “images/Sub_83-colormap_1.png",
//   “images/Sub_84-colormap_1.png",
//   “images/Sub_85-colormap_1.png",
//   “images/Sub_86-colormap_1.png",
//   “images/Sub_87-colormap_1.png",
//   “images/Sub_88-colormap_1.png",
//   “images/Sub_89-colormap_1.png",
//   “images/Sub_90-colormap_1.png",
//   “images/Sub_91-colormap_1.png",
//   “images/Sub_92-colormap_1.png",
//   “images/Sub_93-colormap_1.png",
//   “images/Sub_94-colormap_1.png",
//   “images/Sub_95-colormap_1.png",
//   “images/Sub_96-colormap_1.png",
//   “images/Sub_97-colormap_1.png",
//   “images/Sub_98-colormap_1.png",
//   “images/Sub_99-colormap_1.png",
//   “images/Sub_100-colormap_1.png",
//   “images/Sub_101-colormap_1.png"

);

// var img2 = new Array(
//   “images/Sub_1-colormap_2.png",
//   “images/Sub_2-colormap_2.png",
//   “images/Sub_3-colormap_2.png",
//   “images/Sub_4-colormap_2.png",
//   “images/Sub_5-colormap_2.png",
//   “images/Sub_6-colormap_2.png",
//   “images/Sub_7-colormap_2.png",
//   “images/Sub_8-colormap_2.png",
//   “images/Sub_9-colormap_2.png",
//   “images/Sub_10-colormap_2.png",
//   “images/Sub_11-colormap_2.png",
//   “images/Sub_12-colormap_2.png",
//   “images/Sub_13-colormap_2.png",
//   “images/Sub_14-colormap_2.png",
//   “images/Sub_15-colormap_2.png",
//   “images/Sub_16-colormap_2.png",
//   “images/Sub_17-colormap_2.png",
//   “images/Sub_18-colormap_2.png",
//   “images/Sub_19-colormap_2.png",
//   “images/Sub_20-colormap_2.png",
//   “images/Sub_21-colormap_2.png",
//   “images/Sub_22-colormap_2.png",
//   “images/Sub_23-colormap_2.png",
//   “images/Sub_24-colormap_2.png",
//   “images/Sub_25-colormap_2.png",
//   “images/Sub_26-colormap_2.png",
//   “images/Sub_27-colormap_2.png",
//   “images/Sub_28-colormap_2.png",
//   “images/Sub_29-colormap_2.png",
//   “images/Sub_30-colormap_2.png",
//   “images/Sub_31-colormap_2.png",
//   “images/Sub_32-colormap_2.png",
//   “images/Sub_33-colormap_2.png",
//   “images/Sub_34-colormap_2.png",
//   “images/Sub_35-colormap_2.png",
//   “images/Sub_36-colormap_2.png",
//   “images/Sub_37-colormap_2.png",
//   “images/Sub_38-colormap_2.png",
//   “images/Sub_39-colormap_2.png",
//   “images/Sub_40-colormap_2.png",
//   “images/Sub_41-colormap_2.png",
//   “images/Sub_42-colormap_2.png",
//   “images/Sub_43-colormap_2.png",
//   “images/Sub_44-colormap_2.png",
//   “images/Sub_45-colormap_2.png",
//   “images/Sub_46-colormap_2.png",
//   “images/Sub_47-colormap_2.png",
//   “images/Sub_48-colormap_2.png",
//   “images/Sub_49-colormap_2.png",
//   “images/Sub_50-colormap_2.png",
//   “images/Sub_51-colormap_2.png",
//   “images/Sub_52-colormap_2.png",
//   “images/Sub_53-colormap_2.png",
//   “images/Sub_54-colormap_2.png",
//   “images/Sub_55-colormap_2.png",
//   “images/Sub_56-colormap_2.png",
//   “images/Sub_57-colormap_2.png",
//   “images/Sub_58-colormap_2.png",
//   “images/Sub_59-colormap_2.png",
//   “images/Sub_60-colormap_2.png",
//   “images/Sub_61-colormap_2.png",
//   “images/Sub_62-colormap_2.png",
//   “images/Sub_63-colormap_2.png",
//   “images/Sub_64-colormap_2.png",
//   “images/Sub_65-colormap_2.png",
//   “images/Sub_66-colormap_2.png",
//   “images/Sub_67-colormap_2.png",
//   “images/Sub_68-colormap_2.png",
//   “images/Sub_69-colormap_2.png",
//   “images/Sub_70-colormap_2.png",
//   “images/Sub_71-colormap_2.png",
//   “images/Sub_72-colormap_2.png",
//   “images/Sub_73-colormap_2.png",
//   “images/Sub_74-colormap_2.png",
//   “images/Sub_75-colormap_2.png",
//   “images/Sub_76-colormap_2.png",
//   “images/Sub_77-colormap_2.png",
//   “images/Sub_78-colormap_2.png",
//   “images/Sub_79-colormap_2.png",
//   “images/Sub_80-colormap_2.png",
//   “images/Sub_81-colormap_2.png",
//   “images/Sub_82-colormap_2.png",
//   “images/Sub_83-colormap_2.png",
//   “images/Sub_84-colormap_2.png",
//   “images/Sub_85-colormap_2.png",
//   “images/Sub_86-colormap_2.png",
//   “images/Sub_87-colormap_2.png",
//   “images/Sub_88-colormap_2.png",
//   “images/Sub_89-colormap_2.png",
//   “images/Sub_90-colormap_2.png",
//   “images/Sub_91-colormap_2.png",
//   “images/Sub_92-colormap_2.png",
//   “images/Sub_93-colormap_2.png",
//   “images/Sub_94-colormap_2.png",
//   “images/Sub_95-colormap_2.png",
//   “images/Sub_96-colormap_2.png",
//   “images/Sub_97-colormap_2.png",
//   “images/Sub_98-colormap_2.png",
//   “images/Sub_99-colormap_2.png",
//   “images/Sub_100-colormap_2.png",
//   “images/Sub_101-colormap_2.png"
// );

var imgElement = document.getElementById("imgDemo");
var i = 0;
var imgLen = img.length;

var no_box = document.querySelector(".imnum");

function next() {
  if (i < imgLen - 1) {
    i++;
    imgElement.src = img[i];
    document.getElementsByClassName("prev").disabled = false;
  } else {
    document.getElementsByClassName("next").disabled = true;
  }
  return setNo();
}

function prev() {
  if (i > 0) {
    i--;
    imgElement.src = img[i];
    document.getElementsByClassName("next").disabled = false;
  } else {
    document.getElementsByClassName("prev").disabled = true;
  }

  return setNo();
}

function setNo() {
  // Change innerhtml
  return (no_box.innerHTML = "IMAGE " + (i + 1));
}

function one() {
  imgElement.src = img[i];
}

function two() {
  imgElement.src = img2[i];
}

function three() {
  imgElement.src = img3[i];
}
