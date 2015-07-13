import unittest

class mytest(unittest.TestCase):

	def testa(self):
		self.assertEqual(1, 2, 'should be equal')
		print 'asdf'

if __name__ == '__main__':
	unittest.main()