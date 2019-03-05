import React from 'react'

export default () => (
  <div>
    <div className='container'>
      <div className='page-label'></div>
      <h1>Task Management</h1>
      <section className='mt-50'>
        <h2>Current tasks:</h2>
        <ul>
          <li>Wake up at 7:00</li>
          <li>Read a book 30min/1h</li>
          <li>Study programming 30min/1h</li>
          <li>Physical activity 40min/1h</li>
        </ul>
      </section>
      <section className='mt-50'>
        <h2>Monthly measurement:</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
              <th>19</th>
              <th>20</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wake up</td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
            </tr>
            <tr>
              <td>Read</td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
              <td><input type='checkbox' /></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='mt-50'>
        <h2>Annual measurement:</h2>
        
      </section>
    </div>
  </div>
)
