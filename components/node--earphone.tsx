import Image from "next/image"
import { DrupalNode } from "next-drupal"
import { absoluteUrl } from '../lib/utils';

interface NodeArticleProps {
    node: DrupalNode
  }

const NodeEarphone = ({ node, ...props }: NodeArticleProps) => {
    console.log("NodeEarphone fields >>>>>", node)
    return (
        <>
        {  /* start earphone header paragraph */}

       { node.field_product_header.field_subline && <span>{node.field_product_header.field_subline}</span>}
       <h1>{node.title}</h1> 
       {node.field_product_header.field_description?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.field_product_header.field_description?.processed }}
          className="mt-6 font-serif text-xl leading-loose prose"
        />
      )}

        {node.field_product_header.field_image && (
            <figure>
            <Image
                src={absoluteUrl(node.field_product_header.field_image.uri.url)}
                width={300}
                height={300}
                alt={node.field_product_header.field_image.resourceIdObjMeta.alt}
                priority
            />
            </figure>
        )}
        
       {node.field_product_header.field_price && <span>$ {node.field_product_header.field_price}</span>}

       {  /* end earphone header paragraph */}

       {  /* start earphone header feature  */}
        {node.field_features?.processed && (
            <div
            dangerouslySetInnerHTML={{ __html: node.field_features?.processed }}
            className="mt-6 font-serif text-xl leading-loose prose"
            />
        )}
        {  /* end earphone header feature  */}

        {  /* start earphone  box paragraph */}


        {  /* end earphone  box paragraph   */}



        </> 
     );
}
 
export default NodeEarphone;