import React, { Suspense, lazy } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import {categoriesSelector} from '../../store/selectors/appSelector';

const SidebarItem = lazy(() => import('../../components/sidebarItem'));

export default function Sidebar() {

const categories = useSelector(categoriesSelector, shallowEqual);

  return (
    <div className='sidebar'>
        <Suspense fallback="...Loading">
            {
                categories?.map(category => 
                    <SidebarItem category={category} key={category.id}/>  
                )
            }
        </Suspense>
    </div>
  )
}
