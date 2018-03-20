function len(){
    textNum = $(this).text().length;
    $(this).append(textNum);
}
$("p").each(len);
