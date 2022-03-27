import { Language } from './../../common/types/Language';
import { Category } from '../../common/types/Category';
import { Country } from '../../common/types/Country';

export interface SourcesRequestProps {
    category?: Category;
    language?: Language;
    country?: Country;
}
