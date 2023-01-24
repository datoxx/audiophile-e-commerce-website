import { GetStaticPropsResult } from 'next';
import { DrupalNode } from 'next-drupal';
import { drupal } from '../../lib/drupal';

interface CategoryEarphonesPageProps {
    nodes: DrupalNode[];
  }

const CategoryEarphonesNode = ({nodes}: CategoryEarphonesPageProps) => {
    console.log("earphones category node>>>", nodes)
    return ( 
        <>
            <h1 className='uppercase'>{nodes[0].node_type.resourceIdObjMeta.drupal_internal__target_id}s</h1>
        </>
     );
}
 
export default CategoryEarphonesNode;


export async function getStaticProps( context): Promise<GetStaticPropsResult<CategoryEarphonesPageProps>> {

    const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
      "node--earphone",
      context,
      {
        params: {
            "filter[status]": 1,
            "fields[node--earphone]": "title,path,node_type,field_product_header,field_general_paragraph,field_product_category_list",
            include: `
                field_product_header.field_image,
                field_general_paragraph.field_image,
                field_product_category_list.field_product_category_child_ele.field_category_image
            `
        }
      }
    )
  
    return {
      props: {
        nodes
      },
    }
  }
  