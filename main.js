
var init = true;
var tablePos=1;

if(true){
    var apts = [
        {name: "Bootkit", altName:"Rootkit", target:"Linux, Windows", vector:"Infect naster boot record located on physical motherboard, before antivirus is initialized.", malware:"Rootkits, Boot Sector Infector", ttp:"Some antivirus can detect presence.", modus:"Infect the boot sector before OS is initialized.", refs:"https://securelist.com/attacks-before-system-startup/63725/", toolset:"Tools"},
        {name: "Botnet", altName:"", target:"Linux, Windows, IOS", vector:"Not Sure", malware:"botnet", ttp:"Attacker controls infected CPU from central location.", modus:"Install malware that allows backdoor access to attacker.", refs:"https://en.wikipedia.org/wiki/Botnet", toolset:""},
        {name: "Worm", altName:"Worm", target:"All", vector:"Come through network and infect machine.", malware:"virus", ttp:"", modus:"Once machine is infected replicate and go out across network to infect other machines", refs:"https://en.wikipedia.org/wiki/Computer_worm", toolset:""}
    ];
    for(var i = 0 ; i<apts.length ; ++i){
        document.getElementById("name" + tablePos).innerHTML = apts[i].name;
        document.getElementById("alt" + tablePos).innerHTML = apts[i].altName;
        document.getElementById("target" + tablePos).innerHTML = apts[i].target;
        document.getElementById("vector" + tablePos).innerHTML = apts[i].vector;
        document.getElementById("malware" + tablePos).innerHTML = apts[i].malware;
        document.getElementById("ttp" + tablePos).innerHTML = apts[i].ttp;
        document.getElementById("mo" + tablePos).innerHTML = apts[i].modus;
        document.getElementById("refs" + tablePos).innerHTML = apts[i].refs;
        document.getElementById("tools" + tablePos).innerHTML = apts[i].tools;
        ++tablePos;
    }
    /*
    for(var j = tablePos ; j<10 ; ++j){
        document.getElementById("name"+j).style.display = "none";
        document.getElementById("alt" + j).style.display = "none";
        document.getElementById("target" + j).style.display = "none";
        document.getElementById("vector" + j).style.display = "none";
        document.getElementById("malware" + j).style.display = "none";
        document.getElementById("ttp" + j).style.display = "none";
        document.getElementById("mo" + j).style.display = "none";
        document.getElementById("refs" + j).style.display = "none";
        document.getElementById("tools" + j).style.display = "none";
    }
    */
}

function addAPT(){
    var name = document.getElementById("nameInput").value;
    var form = document.getElementsByName('apt-form')[0];
    var altName = document.getElementById("oNameInput").value;
    var target = document.getElementById("targetInput").value;
    var vector = document.getElementById("vectorInput").value;
    var malware = document.getElementById("malwareInput").value;
    var ttp = document.getElementById("ttpInput").value;
    var modus = document.getElementById("moInput").value;
    var refs = document.getElementById("refsInput").value;
    var tools = document.getElementById("toolsInput").value;

    if(name == "" || target == "" || vector ==""){
        alert("Please enter required fields (Marked by *)");
    }
    else{
        document.getElementById("name" + tablePos).innerHTML = name;
        document.getElementById("alt" + tablePos).innerHTML = altName;
        document.getElementById("target" + tablePos).innerHTML = target;
        document.getElementById("vector" + tablePos).innerHTML = vector;
        document.getElementById("malware" + tablePos).innerHTML = malware;
        document.getElementById("ttp" + tablePos).innerHTML = ttp;
        document.getElementById("mo" + tablePos).innerHTML = modus;
        document.getElementById("refs" + tablePos).innerHTML = refs;
        document.getElementById("tools" + tablePos).innerHTML = tools;
        /*
        document.getElementById("name"+tablePos).style.display = "inline";
        document.getElementById("alt" + tablePos).style.display = "inline";
        document.getElementById("target" + tablePos).style.display = "inline";
        document.getElementById("vector" + tablePos).style.display = "inline";
        document.getElementById("malware" + tablePos).style.display = "inline";
        document.getElementById("ttp" + tablePos).style.display = "inline";
        document.getElementById("mo" + tablePos).style.display = "inline";
        document.getElementById("refs" + tablePos).style.display = "inline";
        document.getElementById("tools" + tablePos).style.display = "inline";
        */
        var newAPT = {name: name, altName: altName, target:target, vector:vector, malware:malware, ttp:ttp, modus:modus, refs:refs, toolset:tools}
        apts.push(newAPT);
        ++tablePos;
        form.reset();
    }
    
    return false;
}
