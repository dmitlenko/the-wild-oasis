import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useCabins } from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import { filter, sort } from '../../utils/filtering';
import Empty from '../../ui/Empty';

function CabinTable() {
  const { isPending, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isPending) return <Spinner />;

  if (!cabins.length) return <Empty resourceName="cabins" />;

  const filteredCabins = filter({
    selectedFilter: searchParams.get('discount'),
    defaultFilter: 'all',
    items: cabins,
    rules: [
      { name: 'all' },
      { name: 'no-discount', predicate: (value) => !value.discount },
      { name: 'with-discount', predicate: (value) => !!value.discount },
    ],
  });

  const sortedCabins = sort({
    sortBy: searchParams.get('sortBy'),
    sortByDefault: 'startDate-asc',
    items: filteredCabins,
  });

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          items={sortedCabins}
          renderItem={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
