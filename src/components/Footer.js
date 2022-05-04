function Footer() {
    return(
        <footer>
            <div className="wrapper">
                <ul>
                    <li>
                        Coffee data from <a href="https://sampleapis.com/api-list/coffee" title="link to coffee API at sampleapis.com">Sample APIs</a>
                    </li>
                    <li>
                        Header image by <a href="https://unsplash.com/photos/pNIgH0y3upM" title="link to Unsplash photo by RR Abrot"> RR Abrot</a>
                    </li>
                    <li>
                        Illustrations by <a href="https://jcting-web.dev" title="link to web developer's portfolio" >JC Ting</a>
                    </li>
                </ul>

            <p>© 2022 by <a href="https://jcting-web.dev" title="link to web developer's portfolio" >JC Ting</a></p>
            <p>Created at <a className= 
            "juno" href="https://junocollege.com" title="link to Juno College">Juno College </a></p>
            </div>
        </footer>
    )
}

export default Footer;