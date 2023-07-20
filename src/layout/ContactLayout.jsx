import { NavLink, Outlet} from "react-router-dom";


const ContactLayout = () => {  
    return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam
        numquam labore, saepe sint nobis, id nemo ipsum similique et aspernatur
        atque, repudiandae amet eius repellat! Omnis inventore debitis
        necessitatibus iusto recusandae itaque eius placeat aperiam facere
        ratione corporis tenetur accusamus, repellendus reprehenderit rerum
        possimus adipisci quo eligendi, soluta illo nostrum voluptatem
        blanditiis. Minus id dignissimos delectus nam, vel, nesciunt, fugiat
        voluptas consectetur tenetur quidem dolore. Alias, dolores at aliquam
        dolor natus minima laboriosam reiciendis placeat vel quas consequuntur
        enim eum delectus odio velit. Quam deserunt, sint sequi tempora modi eos
        doloremque eveniet exercitationem nesciunt enim illum quas, assumenda
        alias dolorum quis cumque maiores, fugit aspernatur id voluptate
        voluptatem nulla? Quod culpa ipsam voluptate, eaque quia dolores tempora
        quae doloribus eum saepe expedita, qui veniam voluptates facilis
        temporibus hic tenetur illo aperiam eligendi animi quam in?
        Exercitationem incidunt corrupti unde ducimus nostrum ipsum amet
        voluptates? Architecto perspiciatis magni reprehenderit esse
        dignissimos, recusandae nam. Repellendus repudiandae incidunt beatae
        dignissimos odio provident, quas quis ea excepturi at hic. Rerum,
        consequuntur rem ea obcaecati eius corrupti at dolorem illum voluptates
        nulla autem ipsum pariatur quod cum molestias aperiam laboriosam omnis
        officiis eveniet optio dolor! Laborum tempore, excepturi numquam
        consequatur amet ab hic, fugit consequuntur aperiam architecto alias
        expedita nesciunt vel, illum possimus aliquam! Minima maxime dolores
        dolorum eligendi iure dolore quasi labore fuga eius, unde beatae ex
        recusandae dicta dolorem voluptatibus. Ab beatae, provident, totam
        maxime libero laborum quo vero iste alias atque veritatis repellendus
        hic, reiciendis amet! Tempore aspernatur rem beatae? Voluptatem, neque
        iure. Quisquam consequatur tempora necessitatibus explicabo amet ipsa
        possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
        qui quasi tempora exercitationem, fuga nemo nisi provident doloremque
        eligendi est. Quaerat nihil sint, quod ad corporis perferendis officiis
        accusamus quia.15
      </p>
      <nav>

        <NavLink to="faq">Faq</NavLink>
        <NavLink to="form">Form</NavLink>

      </nav>

      <Outlet/>
       
    </div>
  );
};

export default ContactLayout;
