SELECT
  customers.id AS customer_id,
  customers.first_name AS first_name,
  customers.last_name AS last_name,
  customers.email AS email,
  customers.username AS username,
  customers.created_at AS joined_at,

  billing_address.id AS billing_address_id,
  billing_address.street AS billing_street,
  billing_address.city AS billing_city,
  billing_state.code AS billing_state,
  billing_address.zipcode AS billing_zipcode,

  shipping_address.id AS shipping_address_id,
  shipping_address.street AS shipping_address_street,
  shipping_address.city AS shipping_address_city,
  shipping_state.code AS shipping_address_code,
  shipping_address.zipcode AS shipping_address_zipcode,
FROM
customers
JOIN customers_shipping_addresses ON
  customers.id = customers_shipping_addresses.customer_id
AND customers_shipping_addresses.primary = true

JOIN addresses shipping_address ON
  shipping_address.id = customers_shipping_addresses.address_id
JOIN states shipping_state ON
  shipping_address.state_id = shipping_state.id
