const newWindows = (url,width,height) =>{
    const windowsNew = `width=${width},height=${height}`;
    window.open(url,'_blank',windowsNew);
}


const openNewWindow = () =>{
    const url = "https://www.google.com/";
    const width = 800;
    const height = 600;
    newWindows(url,width,height);
}
// openNewWindow();