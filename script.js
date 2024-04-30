      const hoverDiv1 = document.getElementById("hoverDiv1");
      const hoverDiv2 = document.getElementById("hoverDiv2");
      const dcon1 = document.getElementById("dcon1");
      const dcon2 = document.getElementById("dcon2");
      
      dcon1.style.display = "none"
      dcon2.style.display = "none"
      dcon2.style.marginLeft = "-1rem"
      
      let togel = 0
      const munculD = (set) => {
        const parm = document.getElementById(`dcon${set}`);
        togel += 1
          parm.style.animation = "fadeInAnimation 1s ease-in-out forwards"
          parm.style.display = "block"
      }
      const clikMuncul = (set) => {
        const parm = document.getElementById(`dcon${set}`);
        togel += 1
        togel % 2 === 0 ? munculD() : parm.style.display = "none"
      }
      const janganBerubah = (ids) => {
        const drop1 = document.getElementById(`drop${ids}`);
      
        hoverDiv1.style.backgroundColor = "#063465";
        hoverDiv2.style.backgroundColor = "#063465";
        drop1.style.color = "#ffc639"
      }
      const abisBerubah = (ids) => {
        const drop1 = document.getElementById(`drop${ids}`);
        drop1.style.color = ""
      }