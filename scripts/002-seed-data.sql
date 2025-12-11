-- Script para popular as tabelas com dados iniciais

-- Inserir categorias
INSERT INTO categories (id, name, icon) VALUES
('camisas', 'Camisas', 'shirt'),
('shorts', 'Shorts', 'shorts'),
('chinelos', 'Chinelos', 'sandal'),
('tenis', 'Tênis', 'sneaker')
ON CONFLICT (id) DO NOTHING;

-- Inserir produtos de exemplo
INSERT INTO products (name, price, original_price, image, category_id, color, is_new) VALUES
('Camiseta Essential', 89.00, NULL, '/white-basic-t-shirt-minimal.jpg', 'camisas', 'Branco', TRUE),
('Camiseta Contrast', 99.00, 129.00, '/black-white-contrast-t-shirt.jpg', 'camisas', 'Preto/Branco', FALSE),
('Polo Premium', 149.00, NULL, '/navy-blue-polo-shirt-minimal.jpg', 'camisas', 'Azul Marinho', TRUE),
('Camiseta Oversized', 119.00, NULL, '/beige-oversized-t-shirt.jpg', 'camisas', 'Bege', FALSE),
('Short Cargo', 159.00, NULL, '/khaki-cargo-shorts-minimal.jpg', 'shorts', 'Cáqui', TRUE),
('Short Jeans', 139.00, NULL, '/blue-denim-shorts-minimal.jpg', 'shorts', 'Azul Jeans', FALSE),
('Chinelo Slide', 89.00, NULL, '/black-slide-sandal-minimal.jpg', 'chinelos', 'Preto', TRUE),
('Tênis Runner', 299.00, NULL, '/white-running-sneaker-minimal.jpg', 'tenis', 'Branco', TRUE),
('Tênis Street', 349.00, 399.00, '/placeholder.svg', 'tenis', 'Preto', FALSE);

-- Inserir tamanhos para os produtos
INSERT INTO product_sizes (product_id, size, stock) VALUES
(1, 'P', 10), (1, 'M', 15), (1, 'G', 12), (1, 'GG', 8),
(2, 'P', 5), (2, 'M', 10), (2, 'G', 8),
(3, 'M', 7), (3, 'G', 10), (3, 'GG', 5),
(4, 'P', 12), (4, 'M', 15), (4, 'G', 10), (4, 'GG', 6),
(5, '38', 5), (5, '40', 8), (5, '42', 10), (5, '44', 6),
(6, '38', 4), (6, '40', 7), (6, '42', 9),
(7, '39', 10), (7, '40', 12), (7, '41', 15), (7, '42', 10), (7, '43', 8),
(8, '39', 5), (8, '40', 8), (8, '41', 10), (8, '42', 12), (8, '43', 8), (8, '44', 4),
(9, '39', 3), (9, '40', 6), (9, '41', 8), (9, '42', 7), (9, '43', 4);
