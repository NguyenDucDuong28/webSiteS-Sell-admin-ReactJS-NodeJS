import ContentLoader from 'react-content-loader';
import PropType from 'prop-types'

function SkeletonCustom ({children,viewBox="0 0 300 400"}) {
    return ( 
        <ContentLoader viewBox={viewBox} speed={1}>
            
            {children}
        </ContentLoader>
     );
}

SkeletonCustom.propTypes ={
    children: PropType.node.isRequired
}

export default SkeletonCustom;