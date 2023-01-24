import Image from "next/image"
import { DrupalNode } from "next-drupal"
import { absoluteUrl } from '../../lib/utils';
import Link from "next/link";

interface NodeArticleProps {
    node: DrupalNode
  }

const NodeEarphone = ({ node, ...props }: NodeArticleProps) => {
    console.log("NodeEarphone fields >>>>>", node)
    return (
        <>
        {  /* start earphone header paragraph */}

       {  <span>{node.field_product_header?.field_subline}</span>}
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
        
       {<span>$ {node.field_product_header?.field_price}</span>}

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
            <h3>in the  box</h3>
            {node.field_in_the_box && node.field_in_the_box?.map((box:any) => (
              <div key={box.id}>
                <span>{box.field_item_number}</span>
                <span>{box.field_item_name}</span>
              </div>
            ))}
        {  /* end earphone  box paragraph   */}


        {  /* start earphone  galley paragraph */}

        {node.field_product_gallery?.field_gallery_image.map((image:any) => (
            <div key={image.id} >
              <Image
                src={absoluteUrl(image.uri.url)}
                width={200}
                height={200}
                alt={image.resourceIdObjMeta.alt}
                priority
            />
              </div>
            ))}
        {  /* end earphone  galley paragraph */}

        {  /* start earphone  also like */}
          <h3>you may also like </h3>

          <div>
            {node.field_products_also_like.field_also_like_paragraph_elemen.map((product:any) => (
              <div key={product.id}>
                <Image
                  src={absoluteUrl(product.field_you_also_like_image?.uri.url)}
                  width={200}
                  height={200}
                  alt={product.field_you_also_like_image?.resourceIdObjMeta.alt}
                  priority
              />
              <span>{product.field_you_also_like_name}</span>
              <br />
              <Link href={product.field_you_also_like_link.uri.substring(9)}>
                 {product.field_you_also_like_link.title}
              </Link>
              </div>
            ))}
          </div>
        {  /* end earphone   also like */}

                <br/>

        {  /* start category paragraph */}


              <h3>category list</h3>

        <div>
            {node.field_product_category_list.field_product_category_child_ele?.map((category:any) => (
              <div key={category.id}>
                <Image
                  src={absoluteUrl(category.field_category_image?.uri.url)}
                  width={200}
                  height={200}
                  alt={category.field_category_image?.resourceIdObjMeta.alt}
                  priority
              />
              <span>{category.field_category_name}</span>
              <br />
              <Link href={category.field_category_link.uri.substring(9)}>
                 {category.field_category_link.title}
              </Link>
              </div>
            ))}
          </div>        

        {  /* end category paragraph */}

                <br />
        {  /* start generla paragraph */}

              <div>

              <h3>general paragrap</h3>

              <h2>{node.field_general_paragraph.field_headline}</h2>
              <Image
                  src={absoluteUrl(node.field_general_paragraph.field_image.uri.url)}
                  width={200}
                  height={200}
                  alt={node.field_general_paragraph.field_image.resourceIdObjMeta.alt}
                  priority
              />
              <div
                dangerouslySetInnerHTML={{ __html: node.field_general_paragraph.field_general_paragraph_body?.processed }}
                className="mt-6 font-serif  leading-loose prose"
              />

            </div>

        {  /* end general paragraph */}


        </> 
     );
}
 
export default NodeEarphone;