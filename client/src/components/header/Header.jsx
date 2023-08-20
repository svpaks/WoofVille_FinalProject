import "./header.css"

export default function Header(props) {
  const aboutHeaderImg = props?.aboutHeaderImg;

  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">{aboutHeaderImg ?
                                          "" :
                                          "Welcome to Dog Daycare"}</span>
        <span className="headerTitleLg">Woof Ville</span>
      </div>
      <img 
        className="headerImg" 
        src={ aboutHeaderImg ? 
              aboutHeaderImg :
              "https://images.pexels.com/photos/5749795/pexels-photo-5749795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
        alt="" 
      />
    </div>
  );
}
