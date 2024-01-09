const Links = ({links}) => {

    return <div>
        {
            links.map(link => <Link link={link} />)
        }
    </div> 
};

export default Links;