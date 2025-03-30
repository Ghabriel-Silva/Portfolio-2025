
/*importação imagens */
import myface from '../../assets/img/img-my-face/img-my-face-clean.png'
import imgcheck from '../../assets/icons-page/check.png'

/*Importação css */
import Styles from './Infoautor.module.css'


function Infoautor ({txtdescription, showicon, showdescription}){
    return(
        <div  className={Styles.container}>
           <img className={Styles.myFace} src={myface}  alt="imagem meu rosto desenho" />
           <div  className={Styles.txt_icon_description} >
               <div  className={Styles.texto_icon}>
                   <p className={Styles.text}>Gabriel Silva</p>
                   {showicon &&  <img src={imgcheck} alt="icone check"  className={Styles.img_check} />}
               </div>
                {showdescription && <p className={Styles.description}>{txtdescription}  </p>}
           </div>
        </div>
    )
}
export default Infoautor