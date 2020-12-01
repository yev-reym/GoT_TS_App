// @ts-nocheck
import React, { useMemo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowDropUpSharpIcon from '@material-ui/icons/ArrowDropUpSharp'
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp'
import { useTable, useSortBy, usePagination } from 'react-table'
import styles from './styles.scss'

const useStyles = makeStyles({
  table: {
    backgroundColor: '#fffff0',
  },
  sticky: {
    backgroundColor: '#e3b130',
    textAlign: 'center',
  },
})

interface TableViewProps {
  data: any[]
  columns: any[]
  setPage: (page: number) => void
  pageNumber: number
}

const TableView: React.FC<TableViewProps> = ({
  data,
  columns,
  setPage,
  pageNumber,
}) => {
  const classes = useStyles()

  const history = useHistory()

  // For react-table we must memoize data and columns
  const memData = useMemo(() => data, [data])
  const memColumns = useMemo(() => columns, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    state: { pageIndex },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
  } = useTable(
    {
      columns: memColumns,
      data: memData,
      initialState: { pageSize: 30, pageIndex: pageNumber },
      manualPagination: true,
      pageCount: 15,
    },
    useSortBy,
    usePagination
  )

  useEffect(() => {
    setPage(pageIndex)
  }, [pageIndex])

  return (
    <>
      <Table {...getTableProps()} stickyHeader className={classes.table}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={classes.sticky}
                  align={'center'}
                >
                  {column.render('Header')}
                  <span className={styles.icon_container}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDropDownSharpIcon />
                      ) : (
                        <ArrowDropUpSharpIcon />
                      )
                    ) : (
                      ''
                    )}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <TableRow
                {...row.getRowProps()}
                hover
                onClick={() =>
                  history.push(
                    `houses/${row.original.url.replace(
                      `${process.env.API_REQUEST_DOMAIN}houses/`,
                      ''
                    )}`,
                    {
                      ...row.original,
                      goToPage: pageIndex,
                    }
                  )
                }
              >
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()} align={'center'}>
                      {cell.render('Cell')}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'First'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'Prev'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'Next'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'Last'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            value={`${pageIndex + 1}`}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            min={'1'}
            max={`${pageCount - 1}`}
            style={{ width: '100px' }}
          />
        </span>{' '}
      </div>
    </>
  )
}

export default TableView
